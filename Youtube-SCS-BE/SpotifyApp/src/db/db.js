const mongoose = require("mongoose");


/* Database connect function */
async function connectDb() {
 try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected Successfully!");
 } catch (error) {
  console.log("Database connection error:", error);
 }

}

module.exports = connectDb;
