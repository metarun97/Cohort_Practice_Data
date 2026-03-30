// Required items:-
const mongoose = require("mongoose");


// DB connection function created:-
function connectToDB() {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected Successfully!");
    })
    .catch((err) => {
      console.log(err);
    })
}

// DB connection function exported:-
module.exports = connectToDB;
