process.env.JWT_SECRET = 'testsecret';
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

describe('Auth - Register', () => {
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

  test('POST /api/auth/register - success', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      fullName: { firstName: 'Test', lastName: 'User' }
    });
    expect(res.status).toBe(201);
    expect(res.body.user).toHaveProperty('username', 'testuser');
    expect(res.body.user).toHaveProperty('email', 'test@example.com');
    expect(res.headers['set-cookie']).toBeDefined();
  });

  test('POST /api/auth/register - duplicate username returns 409', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    await userModel.create({
      username: 'existingUser',
      email: 'existing@example.com',
      password: hashed,
      fullName: { firstName: 'Ex', lastName: 'Ist' }
    });

    const res = await request(app).post('/api/auth/register').send({
      username: 'existingUser',
      email: 'new@example.com',
      password: 'password123',
      fullName: { firstName: 'New', lastName: 'User' }
    });

    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty('message', 'User with the same username or email already exists');
  });

  test('POST /api/auth/register - duplicate email returns 409', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    await userModel.create({
      username: 'userA',
      email: 'dup@example.com',
      password: hashed,
      fullName: { firstName: 'A', lastName: 'User' }
    });

    const res = await request(app).post('/api/auth/register').send({
      username: 'userB',
      email: 'dup@example.com',
      password: 'password123',
      fullName: { firstName: 'B', lastName: 'User' }
    });

    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty('message', 'User with the same username or email already exists');
  });

  test('POST /api/auth/register - missing fullName returns 400', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'noFull',
      email: 'nofull@example.com',
      password: 'password123'
    });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message', 'Full name is required');
  });

});
