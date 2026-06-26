/* Imported packages/files */
import express  from 'express';
import { insertProducts } from '../controllers/product.controller.js';
/* Route created here */
const router = express.Router();

router.post("/products",insertProducts)



export default router;


