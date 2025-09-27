const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.LOCAL_DATABASE)
    .then(() => {
      console.log('DB Conncted Sucsessfully!');
    })
    .catch((err) => {
      console.log('Database error', err);
    });
}

module.exports = connectToDB;
