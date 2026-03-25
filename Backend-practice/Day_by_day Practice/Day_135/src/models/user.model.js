// Mongoose required here⬇️
const mongoose = require("mongoose");


// Schema created here⬇️
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})


// Model created here⬇️
const userModel = mongoose.model("user",userSchema);

// Model exported here⬇️
module.exports = userModel;
