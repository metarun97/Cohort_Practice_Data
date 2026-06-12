/* Required elements */
const express = require('express');
const cookieParser = require('cookie-parser');
const productRoutes = require('./routes/product.routes');

/* Server created */
const app = express();

/* Middleware used to read req.body data */
app.use(express.json());

/* Middleware to excess cookies in the browser */
app.use(cookieParser());

/* Product routes prefix */
app.use('/api/products', productRoutes);


/* Export element */
module.exports = app;



