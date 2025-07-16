const mongoose = require('mongoose');

function connetToDb() {
  mongoose
    .connect(
      'mongodb+srv://metarun97:DtnUZt9fRjZYpi0q@cluster0.1ksrfjb.mongodb.net/Practice-DB'
    )
    .then(() => {
      console.log('Database connected successfully');
    });
}

module.exports = connetToDb;
