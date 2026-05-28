process.env.JWT_SECRET = 'testsecret';
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Auth - Me', () => {
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
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
  });

  test('GET /api/auth/me - success with valid token', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({
      username: 'meuser',
      email: 'me@example.com',
      password: hashed,
      fullName: { firstName: 'Me', lastName: 'User' }
    });

    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res = await request(app).get('/api/auth/me').set('Cookie', [`token=${token}`]);

    expect(res.status).toBe(200);
    expect(res.body.user).toHaveProperty('username', 'meuser');
    expect(res.body.user).toHaveProperty('email', 'me@example.com');
  });

  test('GET /api/auth/me - missing token returns 401', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
  });

  test('GET /api/auth/me - invalid token returns 401', async () => {
    const res = await request(app).get('/api/auth/me').set('Cookie', ['token=invalidtoken']);
    expect(res.status).toBe(401);
  });

});
