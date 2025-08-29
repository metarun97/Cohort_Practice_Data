const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(
      'mongodb+srv://metarun97_db_user:LvgQTrNHJXoV3rSL@cluster0.pz4vm3y.mongodb.net/DB-Rivision'
    )
    .then(() => {
      console.log('DB Connected Successfully');
    });
}


module.exports = connectToDB;
