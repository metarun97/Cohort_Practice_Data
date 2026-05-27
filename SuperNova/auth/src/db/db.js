// Require dependencies⬇️
const mongoose = require("mongoose");

// Database connection function⬇️
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully.")
  } catch (err) {
    console.log("MongoDB Connection error:", err)
  }
}

// Export element⬇️
module.exports = connectToDB;
