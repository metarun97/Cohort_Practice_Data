// Required items:=
const express = require("express");
const cookieParser = require("cookie-parser");
const connectToDB = require("./db/db");
const dns = require("dns");
const cartRoutes = require("./routes/cart.routes");


// set server DNS mannually:-
dns.setServers(['1.1.1.1', '8.8.8.8']);

// mongoDb connect call:-
connectToDB();

// Servier created:-
const app = express();

// Middleware to read req.body data:-
app.use(express.json());

// Middleware to read req.body data:-
app.use(cookieParser());

// Cart route main endpoint:-
app.use("/api/cart", cartRoutes);


module.exports = app;
