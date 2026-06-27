/* Imported packages/files */
import express from 'express';
import { fetchProductById, fetchProducts, insertAllProducts } from '../controllers/product.controller.js';


/* Route created here */
const router = express.Router();

/* API Endpoints for products */
router.post("/", insertAllProducts);
router.get("/", fetchProducts);
router.get("/:id", fetchProductById);


export default router;


