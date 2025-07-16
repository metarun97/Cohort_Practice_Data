const mongoose = require("mongoose");

function connectToDb(){
  mongoose.connect("mongodb+srv://metarun97:DtnUZt9fRjZYpi0q@cluster0.1ksrfjb.mongodb.net/Practice-BE")
  .then(()=>{
    console.log("Database connected Successfully!");
  })
}

module.exports = connectToDb;
