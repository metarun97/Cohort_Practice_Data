/* Imported packages/files */
import mongoose from "mongoose";

/* ProductScema created here */
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  inStock: {
    type: Boolean,
    require: true,
  },
  reviews: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
})

/* ProductModel created here */
const productModel = mongoose.model("products", productSchema);

export default productModel;
