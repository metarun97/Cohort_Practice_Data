const request = require("supertest");
const app = require("../src/app.js");
const User = require("../src/models/user.model.js");

describe("POST /api/auth/register", () => {
  const user = {
    username: "Tarun",
    email: "tarun@test.com",
    password: "Password@123",
    fullName: {
      firstName: "Tarun",
      lastName: "Upadhyay",
    },
    role: "user",
    addresses: [
      {
        street: "1st",
        city: "Bsr",
        state: "UP",
        pincode: "203001",
        country: "India"
      }
    ],
  };

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(user);

    expect(res.statusCode).toBe(201);
    expect(res.body.user.email).toBe(user.email);

    const dbUser = await User.findOne({ email: user.email });
    expect(dbUser).not.toBeNull();
  });

  it("should not register duplicate email", async () => {
    await User.create(user);

    const res = await request(app)
      .post("/api/auth/register")
      .send(user);
    const dbUser = await User.findOne({ email: user.addresses.forEach((user) => { return { pincode: user.pincode } }) });

    expect(res.statusCode).toBe(409);
  });

  it("should fail if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: "test@test.com",
      });

    expect(res.statusCode).toBe(400);
  });
});
