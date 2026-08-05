const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const jwt = require('jsonwebtoken');

let app;
let mongoServer;
let authToken;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongoServer.getUri();
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = process.env.JWT_SECRET || 'test_jwt_secret';

  app = require('../src/app');

  const userId = new mongoose.Types.ObjectId().toHexString();
  authToken = jwt.sign({ role: 'seller', _id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  await new Promise((resolve, reject) => {
    const db = mongoose.connection;
    if (db.readyState === 1) return resolve();
    db.once('open', resolve);
    db.once('error', reject);
  });
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('GET /api/cart/', () => {
  test('returns empty cart structure when no items exist', async () => {
    const res = await request(app)
      .get('/api/cart/')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('items');
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body).toHaveProperty('totals');
    expect(res.body.totals).toEqual(
      expect.objectContaining({
        subtotal: expect.any(Number),
        tax: expect.any(Number),
        total: expect.any(Number),
      }),
    );
  });

  test('returns cart with items and totals after adding an item', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    // add an item
    const postRes = await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ productId, quantity: 2, qty: 2 });

    expect([200, 201]).toContain(postRes.status);

    // fetch cart
    const res = await request(app)
      .get('/api/cart/')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('items');
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          productId,
          quantity: expect.any(Number),
        }),
      ]),
    );

    expect(res.body).toHaveProperty('totals');
    expect(res.body.totals).toEqual(
      expect.objectContaining({
        subtotal: expect.any(Number),
        tax: expect.any(Number),
        total: expect.any(Number),
      }),
    );
  });
});
