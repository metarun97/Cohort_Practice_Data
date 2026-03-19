const mongoose = require("mongoose");


function connectToDB() {
mongoose.connect("mongodb://metarun_97:lXUdlrfxMOgtYEFr@cluster0.i2hhitg.mongodb.net/BE-Learning")
  .then(() => {
    console.log("DB Connected Successfully!")
  })
}


module.exports = connectToDB;


