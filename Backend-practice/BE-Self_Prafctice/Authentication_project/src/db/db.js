// Mongoose require kia:-
const mongoose = require("mongoose");


// Mongoose ka Connect Function banaya:-
const connectToDb = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected Successfully")
    }).catch((err) => {
      console.log(err)
    })
}

// Mongoose ka Connect Function export kia:-
module.exports = connectToDb;
