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

describe('PATCH /api/cart/item/:productId', () => {
  test('should update an existing item quantity and return 200 with updated cart', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    // add initial item via POST
    await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ productId, quantity: 2, qty: 2 });

    // patch to update quantity
    const res = await request(app)
      .patch(`/api/cart/item/${productId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ qty: 5 });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('cart');
    expect(res.body.cart).toHaveProperty('items');
    expect(res.body.cart.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          productId,
          quantity: 5,
        }),
      ]),
    );
  });

  test('should return 401 when no auth token provided', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    const res = await request(app)
      .patch(`/api/cart/item/${productId}`)
      .set('Accept', 'application/json')
      .send({ qty: 3 });

    expect(res.status).toBe(401);
  });
});
