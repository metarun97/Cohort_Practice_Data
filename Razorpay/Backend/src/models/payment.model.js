const mongoose = require('mongoose');

/* Payment Schema created */
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },

  paymentId: {
    type: String,
  },

  signature: {
    type: String,
  },

  price: {
    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      required: true,
    },
  },

  status: {
    type: String,
    default: 'PENDING',
    enum: ["COMPLETED",'PENDING',"FAILED"],
  },

}, { timestamps: true });

/* Payment model created */
const paymentModel = mongoose.model('payment', paymentSchema);

module.exports = paymentModel;
