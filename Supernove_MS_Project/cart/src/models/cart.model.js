// Required items:-
const mongoose = require("mongoose");

// Cart schema created:-
const cartSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      quantity: {
        type: Number,
        required: true
        , min: 1
      }
    }
  ]
}, { timestamps: true })


// Cart model created:-
const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;


