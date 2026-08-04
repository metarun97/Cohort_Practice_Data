const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

process.env.JWT_SECRET = "testsecret";

const app = require("../src/app");
const productModel = require("../src/models/product.model");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await productModel.deleteMany({});
});

test("GET /api/products returns empty list when none exist", async () => {
  const response = await request(app).get("/api/products");

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("message", "products fetched successfully");
  expect(Array.isArray(response.body.data)).toBe(true);
  expect(response.body.data).toHaveLength(0);
});

test("GET /api/products returns products and supports pagination", async () => {
  const sellerId = new mongoose.Types.ObjectId();
  await productModel.create([
    { title: 'Product A', description: 'A', price: { amount: 100, currency: 'INR' }, seller: sellerId },
    { title: 'Product B', description: 'B', price: { amount: 200, currency: 'INR' }, seller: sellerId },
    { title: 'Product C', description: 'C', price: { amount: 300, currency: 'INR' }, seller: sellerId },
  ]);

  const response = await request(app).get("/api/products").query({ skip: 1, limit: 1 });

  expect(response.status).toBe(200);
  expect(response.body.data).toHaveLength(1);
  expect(['Product A', 'Product B', 'Product C']).toContain(response.body.data[0].title);
});

test("GET /api/products supports price filtering and text search", async () => {
  const sellerId = new mongoose.Types.ObjectId();
  await productModel.create([
    { title: 'Cheap', description: 'Cheap item', price: { amount: 50, currency: 'INR' }, seller: sellerId },
    { title: 'Expensive', description: 'Costly item', price: { amount: 500, currency: 'INR' }, seller: sellerId },
  ]);

  const resPrice = await request(app).get("/api/products").query({ minprice: 100 });
  expect(resPrice.status).toBe(200);
  expect(resPrice.body.data).toHaveLength(1);
  expect(resPrice.body.data[0].title).toBe('Expensive');

  const resSearch = await request(app).get("/api/products").query({ q: 'Cheap' });
  expect(resSearch.status).toBe(200);
  expect(resSearch.body.data).toHaveLength(1);
  expect(resSearch.body.data[0].title).toBe('Cheap');
});

test("GET /api/products/:id returns a single product by id", async () => {
  const sellerId = new mongoose.Types.ObjectId();
  const product = await productModel.create({
    title: 'Single Product',
    description: 'Detail view',
    price: { amount: 150, currency: 'INR' },
    seller: sellerId,
  });

  const response = await request(app).get(`/api/products/${product._id}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Product fetched successfully');
  expect(response.body).toHaveProperty('product');
  expect(response.body.product.title).toBe('Single Product');
  expect(response.body.product.price).toMatchObject({ amount: 150, currency: 'INR' });
});

test("GET /api/products/:id returns 404 when product is not found", async () => {
  const missingId = new mongoose.Types.ObjectId();

  const response = await request(app).get(`/api/products/${missingId}`);

  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty('message', 'Product not found');
});
