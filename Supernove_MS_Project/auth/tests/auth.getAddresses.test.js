// Required elements:-
const request = require("supertest");
const app = require("../src/app");

const jwt = require("jsonwebtoken");

const User = require("../src/models/user.model");
const Address = require("../src/models/user.model");


describe("GET /api/auth/users/me/addresses - Get Addresses", () => {
  let token;
  let user;

  beforeEach(async () => {

    user = await User.create(
      {
        username: "tarun",
        email: "tarun@test.com",
        password: "123456",
        fullName: {
          firstName: "Tarun",
          lastName: "Upadhyay"
        },
        addresses: [{
          street: "Noida",
          city: "Noida",
          state: "UP",
          pincode: "201301",
          country: "India",
          isDefault: false
        }, {
          street: "Street-2",
          city: "BRR",
          state: "UP",
          pincode: "203001",
          country: "India",
          isDefault: true
        }]
      });


    token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    await Address.create([
      {
        id: user._id,
        username: "Varun",
        email: "varun@email.com",
        addresses: {
          street: "Noida",
          city: "Noida",
          state: "UP",
          pincode: "201301",
          country: "India",
          isDefault: false
        },
      }]);
  });

  afterEach(async () => {

    await User.deleteMany();
    await Address.deleteMany();

  });

  it("should return saved addresses", async () => {

    const res = await request(app)
      .get("/api/auth/users/me/addresses")
      .set("Cookie", `token=${token}`);

    expect(res.statusCode)
      .toBe(200);

    expect(res.body.addresses.length)
      .toBe(2);

  });
  it("should mark default address correctly", async () => {

    const res = await request(app)
      .get("/api/auth/users/me/addresses")
      .set("Cookie", `token=${token}`);

    const defaultAddress =
      res.body.addresses.find(
        item => item.isDefault === true
      );

    expect(defaultAddress)
      .toBeDefined();
  });

  it("should reject request without login", async () => {

    const res = await request(app)
      .get("/api/auth/users/me/addresses");

    expect(res.statusCode)
      .toBe(401);
  });
});
