const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('DB Connected Successfully!');
    })
    .catch((err) => {
      console.log('Error form the DB', err);
    });
}

module.exports = connectToDB;
