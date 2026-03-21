// Mongoose required here⬇️
const mongoose = require("mongoose");


// DB connecting function created⬇️
function connectToDb() {
  mongoose.connect("mongodb+srv://metarun_97:tb2uoi66OGcdUywD@cluster0.i2hhitg.mongodb.net/BE-Learning").then(() => {
    console.log("DB connected Successfully!")
  })
}

// Export DB connecting function here⬇️
module.exports = connectToDb;
