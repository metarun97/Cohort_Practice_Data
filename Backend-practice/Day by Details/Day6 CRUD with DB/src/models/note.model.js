const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;
