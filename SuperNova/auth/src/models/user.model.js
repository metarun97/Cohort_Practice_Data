// Require dependencies⬇️
const mongoose = require("mongoose");

// addressSchema created⬇️
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String,
})

// userSchema created⬇️
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  addresses: [
    addressSchema
  ]
})

// userModel created⬇️
const userModel = mongoose.model("user", userSchema);

// Exporet element⬇️
module.exports = userModel;
