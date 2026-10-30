const mongoose = require("mongoose");


const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDb")
  } catch (error) {
    console.log("Error to connected MongoDb", error);
  }
}


module.exports = connectToDb;
