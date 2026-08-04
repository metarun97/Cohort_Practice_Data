// Required items:-
const request = require("supertest");
const app = require("../src/app");

const jwt = require("jsonwebtoken");

const User = require("../src/models/user.model");


describe("POST /api/auth/users/me/addresses - Add Address", () => {

  let token;
  let user;


  beforeEach(async () => {

    user = await User.create({
      fullName: {
        firstName: "Tarun",
        lastName: "Upadhyay"
      },
      username: "tarun",
      email: "tarun@test.com",
      password: "123456",
      addresses: [{
        street: "RK Puram Sec-1",
        city: "Delhi",
        state: "New Delehi",
        pincode: "110066",
        country: "India",
        isDefault: true
      }]
    });


    token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET
    );
  });

  afterEach(async () => {
    await User.deleteMany();
  });



  it("should add new address successfully", async () => {
    const address = {
      street: "RK Puram Sec-1",
      city: "Delhi",
      state: "New Delehi",
      pincode: "204211",
      country: "India",
      isDefault: true,
    };

    const res = await request(app)
      .post("/api/auth/users/me/addresses")
      .set("Cookie", `token=${token}`)
      .send(address);

    expect(res.statusCode).toBe(201);
    expect(res.body.address).toMatchObject({
      street: address.street,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      country: address.country,
      isDefault: address.isDefault,
    });
  });



  it("should fail when required fields are missing", async () => {
    const res = await request(app)
      .post("/api/auth/users/me/addresses")
      .set("Cookie", `token=${token}`)
      .send({
        street: "Modipuram Block-A",
        city: "Meerut",
        state: "UP",
        pincode: "250001",
        isDefault: false,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: "country" }),
      ])
    );
  });



  it("should fail if pincode is invalid", async () => {
    const res = await request(app)
      .post("/api/auth/users/me/addresses")
      .set("Cookie", `token=${token}`)
      .send({
        street: "Delhi",
        city: "Meerut",
        state: "UP",
        pincode: "123",
        country: "India",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: "pincode" }),
      ])
    );
  });



});
