const mongoose = require("mongoose");


const adressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String,
})



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
  },
  fullName: {
    firstName: { type: String, unique: true },
    lastName: { type: String, unique: true },
  }, role: {
    type: String,
    enum: ["user", "seller"],
    default: "user"
  },
  addresses: [
    adressSchema
  ]
})


const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
