// Mongoose require kia:-
const mongoose = require("mongoose");


// Mongoose se connect function banaya:-
const connectTodB = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected Successfully!");
    })
      .catch((err) => {
        console.log(err);
      })
}


// Mongoose se connect function ko export kia:-
module.exports = connectTodB;

