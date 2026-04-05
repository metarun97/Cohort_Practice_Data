// Mongoose require kia:-
const mongoose = require("mongoose");


// Schema banaya gaya:-
const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
})


// Model banaya gaya:-
const playerModel = mongoose.model("player",playerSchema);


// Model export kia gaya:-
module.exports = playerModel;



