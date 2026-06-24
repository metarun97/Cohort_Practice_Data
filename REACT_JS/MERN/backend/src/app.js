/* Imported packages/files */
import express from "express";
import ecomRoutes from "./routes/ecom.routes.js";
import cors from 'cors';

/* Server created here */
const app = express();


/* Middleware for avoid cors error policy */
app.use(cors());

/* Middleware to read req.body data */
app.use(express.json());



/* Routes main endpoints */
app.use("/api/ecom", ecomRoutes);


export default app;

