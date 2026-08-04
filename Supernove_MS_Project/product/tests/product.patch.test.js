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

test("PATCH /api/products/:id updates product fields for seller", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId, "seller");

  const product = await productModel.create({
    title: "Original Title",
    description: "Original description",
    price: { amount: 140, currency: "INR" },
    seller: sellerId,
  });

  const response = await request(app)
    .patch(`/api/products/${product._id}`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      title: "Updated Title",
      description: "Updated description",
      amount: 140,
      currency: "INR",
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("message");
  expect(response.body).toHaveProperty("product");
  expect(response.body.product.title).toBe("Updated Title");
  expect(response.body.product.description).toBe("Updated description");
  expect(response.body.product.price).toMatchObject({ amount: 140, currency: "INR" });
  expect(response.body.product.seller.toString()).toBe(sellerId);
});

test("PATCH /api/products/:id returns 404 when product does not exist", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId, "seller");
  const missingId = new mongoose.Types.ObjectId();

  const response = await request(app)
    .patch(`/api/products/${missingId}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ title: "Does not matter" });

  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty("message", "Product not found");
});
