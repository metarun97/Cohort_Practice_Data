/* Imported packages/files */
import express from 'express';
import { addToCart, clearCart, getCartData, removeFromCart, updateQuantity } from '../controllers/cart.controller.js';


/* Cart route created */
const router = express.Router();


/* Add to cart API endpoint */
router.post("/add", addToCart);
router.get("/", getCartData);
router.delete("/remove/:productId", removeFromCart);
router.delete("/clear", clearCart)
router.patch("/updateQty", updateQuantity)

export default router;

