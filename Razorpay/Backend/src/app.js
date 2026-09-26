const express = require("express");
const productRoutes = require('./routes/product.routes');
const paymentRoutes = require('./routes/payment.routes');
const cors = require("cors");

/* Server created */
const app = express();

app.use(cors());
/* Middleware to read req.bod data */
app.use(express.json());


/* Product routes prefix */
app.use("/api/products",productRoutes);

/* Payment routes prefix */
app.use("/api/payments",paymentRoutes);


module.exports = app;

