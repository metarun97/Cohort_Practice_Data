// Requied items:-
const mongoose = require("mongoose");

// Function to connect database:-
const connectToDab = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully.");
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
};

// Exported item:-
module.exports = connectToDab;
