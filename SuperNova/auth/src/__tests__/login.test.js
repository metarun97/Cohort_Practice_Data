process.env.JWT_SECRET = 'testsecret';
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

describe('Auth - Login', () => {
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

  test('POST /api/auth/login - success (username)', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    await userModel.create({
      username: 'loginuser',
      email: 'login@example.com',
      password: hashed,
      fullName: { firstName: 'Login', lastName: 'User' }
    });

    const res = await request(app).post('/api/auth/login').send({
      username: 'loginuser',
      password: 'password123'
    });

    expect(res.status).toBe(200);
    expect(res.body.user).toHaveProperty('username', 'loginuser');
    expect(res.headers['set-cookie']).toBeDefined();
  });

  test('POST /api/auth/login - wrong password returns 401', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    await userModel.create({
      username: 'loginuser2',
      email: 'login2@example.com',
      password: hashed,
      fullName: { firstName: 'Login', lastName: 'Two' }
    });

    const res = await request(app).post('/api/auth/login').send({
      username: 'loginuser2',
      password: 'wrongpassword'
    });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });

  test('POST /api/auth/login - non-existent user returns 404', async () => {
    const res = await request(app).post('/api/auth/login').send({
      username: 'noSuchUser',
      password: 'whatever'
    });

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('message', 'User not found');
  });

  test('POST /api/auth/login - success (email)', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    await userModel.create({
      username: 'emailuser',
      email: 'email@example.com',
      password: hashed,
      fullName: { firstName: 'Email', lastName: 'User' }
    });

    const res = await request(app).post('/api/auth/login').send({
      email: 'email@example.com',
      password: 'password123'
    });

    expect(res.status).toBe(200);
    expect(res.body.user).toHaveProperty('username', 'emailuser');
    expect(res.headers['set-cookie']).toBeDefined();
  });

});
