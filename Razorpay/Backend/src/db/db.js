const mongoose = require("mongoose");


/*  Connect DB function */
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
}

module.exports = connectToDb;
