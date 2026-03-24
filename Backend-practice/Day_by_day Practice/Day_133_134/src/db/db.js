// Mongoose required here⬇️
const mongoose = require("mongoose");


// connectToDb function created here⬇️
function connectToDb() {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected Successfully!")
    }).catch((err) => {
      console.log(err);
    })
}


// connectToDb function exported here⬇️
module.exports = connectToDb;
