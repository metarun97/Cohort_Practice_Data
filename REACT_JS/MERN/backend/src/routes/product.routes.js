/* Imported packages/files */
import express from 'express';
import { fetchProducts, insertProducts } from '../controllers/product.controller.js';


/* Route created here */
const router = express.Router();

/* API Endpoints for products */
router.post("/products", insertProducts)
router.get("/products", fetchProducts)


export default router;


