// Required items:-
const mongoose = require("mongoose");


// productSchema created:-
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    }
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  images: [{
    url: String,
    thumbnail: String,
    id: String,
  }],
})

// productModel created:-
const productModel = mongoose.model("product",productSchema);

// exported item:-
module.exports = productModel;
