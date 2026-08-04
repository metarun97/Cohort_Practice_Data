const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { MongoMemoryServer } = require("mongodb-memory-server");

process.env.JWT_SECRET = "testsecret";

jest.mock("../src/service/imagekit.service", () => ({
  uploadImage: jest.fn().mockResolvedValue({
    url: "https://test.com/image.jpg",
    thumbnail: "https://test.com/thumb/test-image.jpg",
    id: "12345",
  }),
}));

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

const createToken = (sellerId) => {
  return jwt.sign({ id: sellerId, role: "seller" }, process.env.JWT_SECRET);
};

test("POST /api/products creates a new product with uploaded images", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId);

  const response = await request(app)
    .post("/api/products")
    .set("Authorization", `Bearer ${token}`)
    .field("title", "Test Product")
    .field("description", "A product created during tests")
    .field("amount", "199.99")
    .field("currency", "USD")
    .attach("images", Buffer.from("content"), "test-image-1.jpg")
    .attach("images", Buffer.from("content"), "test-image-2.jpg");

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("message", "Product created successfully.");
  expect(response.body).toHaveProperty("data");
  expect(response.body.data).toHaveProperty("_id");
  expect(response.body.data.title).toBe("Test Product");
  expect(response.body.data.price).toMatchObject({ amount: 199.99, currency: "USD" });
  expect(response.body.data.seller).toBe(sellerId);
  expect(response.body.data.images).toHaveLength(2);
  expect(response.body.data.images[0]).toMatchObject({
    url: "https://test.com/image.jpg",
    thumbnail: "https://test.com/thumb/test-image.jpg",
    id: "12345",
  });
});

test("POST /api/products returns 400 when required fields are missing", async () => {
  const sellerId = new mongoose.Types.ObjectId().toString();
  const token = createToken(sellerId);

  const response = await request(app)
    .post("/api/products")
    .set("Authorization", `Bearer ${token}`)
    .field("description", "Missing required title, price, seller");

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("errors");
});
