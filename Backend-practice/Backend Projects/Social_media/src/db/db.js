const mongoose = require('mongoose');

const connnectToDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('DB Connected Successfully!');
    })
    .catch((err) => {
      console.log('Database error', err);
    });
};


module.exports = connnectToDB;
