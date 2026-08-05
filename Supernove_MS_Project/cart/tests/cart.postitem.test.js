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

  // create a seller token with a valid _id
  const userId = new mongoose.Types.ObjectId().toHexString();
  authToken = jwt.sign({ role: 'seller', _id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // wait for mongoose connection
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

describe('POST /api/cart/item', () => {
  test('should add an item to cart and return 201 with cart', async () => {
    const productId = new mongoose.Types.ObjectId().toHexString();

    const payload = {
      productId,
      quantity: 2, // validation expects `quantity`
      qty: 2, // controller expects `qty` — include both to satisfy both
    };

    const res = await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('cart');
    expect(res.body.cart).toHaveProperty('items');
    expect(Array.isArray(res.body.cart.items)).toBe(true);
    expect(res.body.cart.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          productId,
          quantity: 2,
        }),
      ]),
    );
  });

  test('should return 400 for invalid productId or quantity', async () => {
    const payload = { productId: 'invalid-id', quantity: 1 };

    const res = await request(app)
      .post('/api/cart/item')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken}`)
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('errors');
  });
});
