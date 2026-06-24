/* Imported packages/files */
import express from "express";
import { createCategories } from "../controllers/ecom.controller.js";


/* Router created here */
const router = express.Router();

/* API Endpoints for category */
router.post('/category', createCategories)
// router.get('/category', getCategories)


export default router;



