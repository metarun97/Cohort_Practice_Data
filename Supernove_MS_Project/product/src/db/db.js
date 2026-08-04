// Required items:-
const mongoose = require("mongoose");


// ConnectDB function:-
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connedted successfully");
  } catch (error) {
    console.error("MongoDb Connedtion error", error)
  }
}


// exported item:-
module.exports = connectDB;
