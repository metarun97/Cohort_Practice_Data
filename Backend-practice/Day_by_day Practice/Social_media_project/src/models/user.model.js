// Mongoose require here:-
const mongoose = require("mongoose");



// Schema created here:-
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  }
})

// Model created here:-
const userModel = mongoose.model("user", userSchema);

// Model exported here:-
module.exports = userModel;




