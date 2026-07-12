// Requied items:-
const mongoose = require("mongoose");


// addressSchema created:-
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
})


// userSchema created:-
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
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
  addresses: [addressSchema]
})


// userModel created:-
const userModel = mongoose.model("user", userSchema);

// Exporeted item:-
module.exports = userModel;



