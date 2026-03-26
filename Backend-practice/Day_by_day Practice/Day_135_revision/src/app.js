// express require kia gaya:-
const express = require("express");

// router require kiya gaya:-
const authRoutes = require('./routes/auth.routes');

// cookie-parser require kiya gaya:-
const cookieParser = require("cookie-parser");

// server create kia gaya:-
const app = express();

// req.body ka data padhne k liye middleware use kia:-
app.use(express.json());

// cookie-parser middleware called:-
app.use(cookieParser());


// auth routes ko use krna:-
app.use("/auth", authRoutes);


// app export kia gaya:-
module.exports = app;
