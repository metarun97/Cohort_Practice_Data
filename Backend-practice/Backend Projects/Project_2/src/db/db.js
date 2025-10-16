const mongoose = require('mongoose');

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('DB Connected Successfully!');
    })
    .catch((error) => {
      console.log(error);
    });
}


module.exports = connectToDB;
