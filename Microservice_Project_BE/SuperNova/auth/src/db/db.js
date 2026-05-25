// Required data⬇️
const mongoose = require("mongoose");


// Database connect function⬇️
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully✅")
  } catch (err) {
    console.log("Database connecton error:", err)
  }
}

// Database connect function exported⬇⬇️
module.exports = connectToDb;

