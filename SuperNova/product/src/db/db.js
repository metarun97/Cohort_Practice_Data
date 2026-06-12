/* Required elements */
const mongoose = require("mongoose");


/* Connect MongoDB function */
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected.");
  } catch (error) {
    console.log("Error to connected MongoDB:", error);
  }
}

/* Export element */
module.exports = connectToDB;
