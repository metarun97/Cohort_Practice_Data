const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Connect to DB');
    })
    .catch((err) => {
      console.log('Server error', err);
    });
}

module.exports = connectToDB;
