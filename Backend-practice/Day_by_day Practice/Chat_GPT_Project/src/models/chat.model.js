/* Required items:- */
const mongoose = require("mongoose");

/* ChatSchema created:- */
const chatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true
  }
}, { timestamps: true })

/* ChatModel created */
const chatModel = mongoose.model("chat", chatSchema);

/* exported data */
module.exports = chatModel;
