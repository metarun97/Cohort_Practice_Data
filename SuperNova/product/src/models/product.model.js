/* Required elements */
const mongoose = require("mongoose");


/* Schema created */
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    ammount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["USD", "INR"],
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
  }]
})


/* Model created */
const productModel = mongoose.model("product", productSchema);

/* Export element */
module.exports = productModel;
