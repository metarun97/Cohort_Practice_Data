/* Imported packages/files */
import express from "express";
import { createCategories, getCategories, getCategoryBySlug } from "../controllers/category.controller.js";


/* Router created here */
const router = express.Router();

/* API Endpoints for category */
router.post('/', createCategories)
router.get('/', getCategories)
router.get('/category/:slug', getCategoryBySlug)


export default router;



