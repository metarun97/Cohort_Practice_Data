/* Required items */
const mongoose = require("mongoose");

/* ConnectToDB function */
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully!")
  } catch (err) {
    console.log("Error connecting to Mongo_Db ", err)
  }
}

/* export data */
module.exports = connectToDb;
