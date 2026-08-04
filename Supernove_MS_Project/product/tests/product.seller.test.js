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

test("GET /api/products/seller returns only products for the authenticated seller", async () => {
  const sellerOneId = new mongoose.Types.ObjectId().toString();
  const sellerTwoId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerOneId);

  await productModel.create([
    {
      title: "Seller One Product A",
      description: "Owned by seller one",
      price: { amount: 100, currency: "INR" },
      seller: sellerOneId,
    },
    {
      title: "Seller One Product B",
      description: "Also owned by seller one",
      price: { amount: 200, currency: "INR" },
      seller: sellerOneId,
    },
    {
      title: "Seller Two Product",
      description: "Owned by seller two",
      price: { amount: 300, currency: "INR" },
      seller: sellerTwoId,
    },
  ]);

  const response = await request(app)
    .get("/api/products/seller")
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("message", "Seller products fetched successfully");
  expect(Array.isArray(response.body.data)).toBe(true);
  expect(response.body.data).toHaveLength(2);
  expect(response.body.data.map((product) => product.title)).toEqual(
    expect.arrayContaining(["Seller One Product A", "Seller One Product B"])
  );
  expect(response.body.data.every((product) => product.seller.toString() === sellerOneId)).toBe(true);
});

test("GET /api/products/seller returns an empty list when the seller has no products", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId);

  const response = await request(app)
    .get("/api/products/seller")
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("message", "Seller products fetched successfully");
  expect(response.body.data).toEqual([]);
});
