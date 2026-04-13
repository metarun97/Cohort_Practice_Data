/* Required elements */
const mongoose = require("mongoose");

/* userSchema created:- */
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  }, password: {
    type: String
  }
}, {
  timestamps: true
})

// userModel created:-
const userModel = mongoose.model("user",userSchema);

/* Export data */
module.exports = userModel;
