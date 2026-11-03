const mongoose = require("mongoose");

const connectDb = async () => {
 try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Databse Connected!");
 } catch (error) {
  console.log("MongoDB connection error:", error);
 }
}


module.exports = connectDb;
