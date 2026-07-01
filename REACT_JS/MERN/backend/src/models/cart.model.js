/* Imported packages/files */
import mongoose from "mongoose";

/* Cart schema created */
const cartSchema = new mongoose.Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      }
    }
  ]
})


/* Cart model created */
const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
