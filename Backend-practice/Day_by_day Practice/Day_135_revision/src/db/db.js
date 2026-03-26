// mongoose require kia gaya:-
const mongoose = require("mongoose");


// connectToDB create kia gaya:-
function connectToDB() {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected Successfully!");
    })
    .catch((err) => {
      console.log(err);
    })
}


// connectToDB export kia gaya:-
module.exports = connectToDB;



