const mongoose = require("mongoose");


/* musicSchema created */
const musicSchema = new mongoose.Schema({
 uri: {
  type: String,
  required: true,
 },

 title: {
  type: String,
  required: true,
 },

 artist: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "user",
  required:true,
 }
})


/* musicModel created */
const musicModel = mongoose.model("music",musicSchema);

module.exports = musicModel;
