// Mongoose require kia:-
const mongoose = require("mongoose");


// Schema banaya:-
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// Model banaya:-
const userModel = mongoose.model("user",userSchema);

// Model export kia:-
module.exports = userModel;
