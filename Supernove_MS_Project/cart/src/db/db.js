// Required items:-
const mongoose = require("mongoose");


// Connect to MongoDB database:-
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error to connect MongoDB", error);
  }
}


module.exports = connectToDB;
