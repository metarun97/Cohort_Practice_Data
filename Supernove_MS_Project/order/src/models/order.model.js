const { request } = require("express");
const mongoose = require("mongoose");

// addressSchema created:-
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
})


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true

  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      },
      price: {
        amount: {
          type: Number,
          required: true
        },
        currency: {
          type: String,
          required: true,
          enum: ["USD", "INR"]
        }
      },
    }
  ],
  status: {
    type: String,
    enum: ["PENDING", "CONFIRMED", "CANCELLED", "SHIPPED", "DELIVERED"]
  },
  totalPrice: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true,
      enum: ["USD", "INR"]
    }
  },
  shippingAddress: addressSchema
}, { timestamps: true })


const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
