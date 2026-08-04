const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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

const createToken = (sellerId, role = "seller") => {
  return jwt.sign({ id: sellerId, role }, process.env.JWT_SECRET);
};

test("DELETE /api/products/:id deletes a product owned by the seller", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId);

  const product = await productModel.create({
    title: "Delete Me",
    description: "Product to be removed",
    price: { amount: 100, currency: "INR" },
    seller: sellerId,
  });

  const response = await request(app)
    .delete(`/api/products/${product._id}`)
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("message", "Product deleted successfully");

  const deletedProduct = await productModel.findById(product._id);
  expect(deletedProduct).toBeNull();
});

test("DELETE /api/products/:id returns 404 when product does not exist", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId);
  const missingId = new mongoose.Types.ObjectId();

  const response = await request(app)
    .delete(`/api/products/${missingId}`)
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty("message", "Product not found");
});
