const mongoose = require('mongoose');

function connectToDb() {
  mongoose
    .connect(
      'mongodb+srv://metarun97_db_user:LvgQTrNHJXoV3rSL@cluster0.pz4vm3y.mongodb.net/DB-Revision'
    )
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToDb;
