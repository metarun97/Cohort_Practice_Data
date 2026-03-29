// Require the mongoose:-
const mongoose = require("mongoose");


// DB connect function created:-
function connectToDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected!");
    }).catch((err) => {
      console.log(err);
    })
}

// export the DB fuction:-
module.exports = connectToDB;


