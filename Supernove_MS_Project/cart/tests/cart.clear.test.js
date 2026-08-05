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

describe('DELETE /api/cart/ (clear cart)', () => {
  test('should clear an existing cart and return 200; subsequent GET returns empty structure', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    // add an item first
    const postRes = await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ productId, quantity: 2, qty: 2 });

    expect([200, 201]).toContain(postRes.status);

    // clear the cart
    const res = await request(app)
      .delete('/api/cart/')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message');

    // GET should return empty cart structure
    const getRes = await request(app)
      .get('/api/cart/')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(getRes.status).toBe(200);
    expect(getRes.body).toHaveProperty('items');
    expect(Array.isArray(getRes.body.items)).toBe(true);
    expect(getRes.body.items.length).toBe(0);
    expect(getRes.body).toHaveProperty('totals');
    expect(getRes.body.totals).toEqual(
      expect.objectContaining({
        itemCount: 0,
        subtotal: 0,
        tax: 0,
        total: 0,
      }),
    );
  });

  test('should return 401 when no auth token provided', async () => {
    const res = await request(app)
      .delete('/api/cart/')
      .set('Accept', 'application/json');

    expect(res.status).toBe(401);
  });

  test('should be idempotent and return 200 when cart does not exist', async () => {
    const res = await request(app)
      .delete('/api/cart/')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});
