const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('DB Connected');
    })
    .catch((err) => {
      console.log('Error connection to mongoDB', err);
    });
}

module.exports = connectToDB;
