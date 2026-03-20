const mongoose = require("mongoose");


function connectToDB() {
  // mongoose.connect("mongodb+srv://metarun_97:lXUdlrfxMOgtYEFr@cluster0.i2hhitg.mongodb.net//BE-Learning")
  mongoose.connect("mongodb+srv://metarun_97:lXUdlrfxMOgtYEFr@cluster0.i2hhitg.mongodb.net//BE-Learning")
    .then(() => {
      console.log("DB Connected Successfully!")
    }).catch((err) => {
      console.log(err);
    })
}


module.exports = connectToDB;


