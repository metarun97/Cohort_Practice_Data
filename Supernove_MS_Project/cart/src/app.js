// Required items:=
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cartRoutes = require("./routes/cart.routes");
const connectToDB = require("./db/db");

// Servier created:-
const app = express();

if (mongoose.connection.readyState !== 1 && process.env.MONGO_URI) {
  connectToDB();
}

// Middleware to read req.body data:-
app.use(express.json());

// Middleware to read req.body data:-
app.use(cookieParser());

// Cart route main endpoint:-
app.use("/api/cart", cartRoutes);


module.exports = app;
