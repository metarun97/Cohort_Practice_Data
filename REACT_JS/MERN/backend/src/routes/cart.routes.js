/* Imported packages/files */
import express from 'express';
import { addToCart } from '../controllers/cart.controller.js';


/* Cart route created */
const router = express.Router();


/* Add to cart API endpoint */
router.post("/", addToCart);


export default router;

