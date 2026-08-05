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

describe('DELETE /api/cart/item/:productId', () => {
  test('should delete an existing item and return 200 with updated cart', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    // add an item first
    const postRes = await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ productId, quantity: 2, qty: 2 });

    expect([200, 201]).toContain(postRes.status);

    // delete the item
    const res = await request(app)
      .delete(`/api/cart/item/${productId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('cart');
    expect(Array.isArray(res.body.cart.items)).toBe(true);
    expect(res.body.cart.items).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ productId }),
      ]),
    );
  });

  test('should return 401 when no auth token provided', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    const res = await request(app)
      .delete(`/api/cart/item/${productId}`)
      .set('Accept', 'application/json');

    expect(res.status).toBe(401);
  });

  test('should return 404 when item does not exist in cart', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    const res = await request(app)
      .delete(`/api/cart/item/${productId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(404);
  });
});
