const express = require("express");
const productRoutes = require("../src/routes/product.routes");
const paymentRoutes = require("../src/routes/payement.routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products",productRoutes);
app.use("/api/payments",paymentRoutes);


module.exports = app;
