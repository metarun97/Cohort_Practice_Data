// Required data:-
const mongoose = require("mongoose");

// post schema created:-
const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }
})

// post model created:-
const postModel = mongoose.model("post",postSchema);

// post model exported:-
module.exports = postModel;


