const request = require("supertest");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = require("../src/app");
const User = require("../src/models/user.model");

describe("GET /api/auth/me", () => {
  let user;
  let token;

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash("Password@123", 10);

    user = await User.create({
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
      username: "John Doe",
      email: "john@test.com",
      password: hashedPassword,
      role: "user",
    });


    token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.JWT_SECRET || "testsecret",
      {
        expiresIn: "1d",
      }
    );
  });

  it("should return logged in user", async () => {
    const res = await request(app)
      .get("/api/auth/me")
      .set("Cookie", [`token=${token}`]);

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(user.email);
    expect(res.body.user.password).toBeUndefined();
  });

  it("should fail without token", async () => {
    const res = await request(app).get("/api/auth/me");

    expect(res.statusCode).toBe(401);
  });

  it("should fail with invalid token", async () => {
    const res = await request(app)
      .get("/api/auth/me")
      .set("Cookie", ["token=invalidtoken"]);

    expect(res.statusCode).toBe(401);
  });
});
