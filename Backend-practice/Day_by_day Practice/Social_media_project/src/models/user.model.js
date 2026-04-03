// Required items:-
const mongoose = require("mongoose");

// Schema created:-
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  }
})


// Model created:-
const userModel = mongoose.model("user", userSchema);

// Model exported:-
module.exports = userModel;
