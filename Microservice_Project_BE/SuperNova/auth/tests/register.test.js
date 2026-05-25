const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app');
const User = require('../src/models/user.model');

let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongod) await mongod.stop();
});

afterEach(async () => {
  await User.deleteMany({});
});

test('POST /auth/register creates user with status code 201', async () => {
  const res = await request(app)
    .post('/auth/register')
    .send({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      fullName: { firstName: 'Test', lastName: 'User' },
    });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('id');
  const user = await User.findOne({ username: 'testuser' });
  expect(user).not.toBeNull();
  expect(user.email).toBe('test@example.com');
  expect(user.password).toBeUndefined();
});

test('POST /auth/register missing fields returns 400', async () => {
  const res = await request(app)
    .post('/auth/register')
    .send({
      username: 'incomplete',
      // missing email and password
    });

  expect(res.status).toBe(400);
  expect(res.body).toHaveProperty('message', 'Missing fields');
});

test('POST /auth/register duplicate user returns 409', async () => {
  // create existing user
  await User.create({
    username: 'exists',
    email: 'exists@example.com',
    password: 'hashed',
    fullName: { firstName: 'Exists', lastName: 'User' },
  });

  const res = await request(app)
    .post('/auth/register')
    .send({
      username: 'exists',
      email: 'new@example.com',
      password: 'password123',
      fullName: { firstName: 'New', lastName: 'User' },
    });

  expect(res.status).toBe(409);
  expect(res.body).toHaveProperty('message', 'User exists');
});
