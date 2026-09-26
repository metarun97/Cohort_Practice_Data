const mongoose = require("mongoose");


/* Product Schema created */
const productSchema = new mongoose.Schema({
  image: String,

  title: String,

  description: String,

  price: {
    amount: {
      type: Number,
      min: 0,
    },

    currency: {
      type: String,
      default: "INR",
      enum: ["INR", "USD"]
    },
  },
})

/* Product Model created */
const productModel = mongoose.model("product",productSchema);

module.exports = productModel;
