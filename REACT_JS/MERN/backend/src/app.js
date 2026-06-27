/* Imported packages/files */
import express from "express";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from './routes/product.routes.js';
import cors from 'cors';

/* Server created here */
const app = express();


/* Middleware for avoid cors error policy */
app.use(cors({
  origin:"http://localhost:5173"
}));

/* Middleware to read req.body data */
app.use(express.json());


/* Routes main endpoints */
app.use("/api/category",categoryRoutes);
app.use("/api/products",productRoutes);


export default app;

