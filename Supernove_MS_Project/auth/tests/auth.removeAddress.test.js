// Required items:=
const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const User = require("../src/models/user.model");


describe("DELETE /api/auth/users/me/addresses/:addressId - Remove Address", () => {

  let token;
  let user;
  let address;

  beforeEach(async () => {
    user = await User.create({
      fullName: {
        firstName: "Varun",
        lastName: "Sharma"
      },
      username: "varun",
      email: "varun@test.com",
      password: "123456"
    });

    token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // create an address as a subdocument on the user
    user.addresses.push({
      street: "Delhi",
      city: "Meerut",
      state: "UP",
      pincode: "250001",
      country: "India",
      isDefault: true,
    });

    await user.save();

    // get reference to the newly added address
    address = user.addresses[user.addresses.length - 1];
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  it("should remove address successfully", async () => {
    const res = await request(app)
      .delete(`/api/auth/users/me/addresses/${address._id}`)
      .set("Cookie", `token=${token}`);

    expect(res.statusCode).toBe(200);

    const updatedUser = await User.findById(user._id).select("addresses");
    const deletedAddress = updatedUser.addresses.find(a => a._id.toString() === address._id.toString());
    expect(deletedAddress).toBeUndefined();
  });

  it("should return 404 if address does not exist", async () => {
    const fakeId = new mongoose.Types.ObjectId();

    const res = await request(app)
      .delete(`/api/auth/users/me/addresses/${fakeId}`)
      .set("Cookie", `token=${token}`);

    expect(res.statusCode).toBe(404);
  });

  it("should not delete address without authentication", async () => {
    const res = await request(app)
      .delete(`/api/auth/users/me/addresses/${address._id}`);

    expect(res.statusCode).toBe(401);
  });

});
