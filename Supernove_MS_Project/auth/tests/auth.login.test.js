const request = require("supertest");
const bcrypt = require("bcryptjs");

const app = require("../src/app");
const User = require("../src/models/user.model");

describe("POST /api/auth/login", () => {
  const userData = {
    username:"John Doe",
    email: "john@test.com",
    password: "Password@123",
  };

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);


    await User.create({
      username:"John Doe",
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
      email: userData.email,
      password: hashedPassword,
      role: "user",
    });
  });

  it("should login successfully", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send(userData);

    expect(res.statusCode).toBe(200);

    // Change this according to your response structure
    expect(res.body.user.email).toBe(userData.email);

    // If token is returned in body

    // OR if using cookies
    // expect(res.headers["set-cookie"]).toBeDefined();
  });

  it("should fail with wrong password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: userData.email,
        password: "WrongPassword",
      });

    expect(res.statusCode).toBe(401);
  });

  it("should fail if user does not exist", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "nouser@test.com",
        password: "Password@123",
      });

    expect(res.statusCode).toBe(401);
  });
});
