// Require mongoose⬇️
const mongoose = require("mongoose");


// Create noteSchema by mongoose⬇️
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});


// Create noteModel by mongoose⬇️
const noteModel = mongoose.model("note", noteSchema);

// Export for use it anywhere⬇️
module.exports = noteModel;
