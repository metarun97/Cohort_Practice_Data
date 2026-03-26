// mongoose require kiya gaya:-
const mongoose = require("mongoose");


// Scheam create kiya gaya:-
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})


// model create kiya gaya:-
const userModel = mongoose.model("user",userSchema);


// model export kiya gaya:-
module.exports = userModel;

