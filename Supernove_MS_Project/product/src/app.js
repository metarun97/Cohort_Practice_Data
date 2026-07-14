// Required items:-
const express = require("express");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/product.routes");

// Server created:-
const app = express();

// Middleware to read cookie data:-
app.use(cookieParser());

// Middleware to req.body data:-
app.use(express.json());


// Product base api endpoint:-
app.use("/api/products", productRoutes);


// exported item:-
module.exports = app;
