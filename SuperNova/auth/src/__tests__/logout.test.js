process.env.JWT_SECRET = 'testsecret';

// Mock redis to avoid real network connections during tests
jest.mock('../db/redis', () => ({
  set: jest.fn().mockResolvedValue('OK')
}));

const redis = require('../db/redis');

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Auth - Logout', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    // Clear mock call history between tests
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
  });

  test('GET /api/auth/logout - success with valid token', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({
      username: 'logoutuser',
      email: 'logout@example.com',
      password: hashed,
      fullName: { firstName: 'Log', lastName: 'Out' }
    });

    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res = await request(app).get('/api/auth/logout').set('Cookie', [`token=${token}`]);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'User logged out successfully');

    // cookie should be cleared
    const setCookieHeader = res.headers['set-cookie'] && res.headers['set-cookie'][0];
    expect(setCookieHeader).toBeDefined();
    expect(setCookieHeader).toMatch(/token=;/);

    // redis should have blacklisted the token
    expect(redis.set).toHaveBeenCalledTimes(1);
    expect(redis.set).toHaveBeenCalledWith(`blacklist:${token}`, true, 'EX', 24 * 60 * 60);
  });

  test('GET /api/auth/logout - missing token returns 200 (no-op)', async () => {
    const res = await request(app).get('/api/auth/logout');
    // current implementation treats missing token as successful logout
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'User logged out successfully');

    // no redis interaction when no token provided
    expect(redis.set).not.toHaveBeenCalled();
  });

  test('GET /api/auth/logout - invalid token returns 200 (blacklisted)', async () => {
    const invalid = 'invalidtoken';
    const res = await request(app).get('/api/auth/logout').set('Cookie', [`token=${invalid}`]);
    // current implementation blacklists token (no validation) and returns 200
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'User logged out successfully');

    // invalid token is still blacklisted
    expect(redis.set).toHaveBeenCalledTimes(1);
    expect(redis.set).toHaveBeenCalledWith(`blacklist:${invalid}`, true, 'EX', 24 * 60 * 60);
  });

});
