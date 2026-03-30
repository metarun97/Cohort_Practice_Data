// Required items:-
const express = require("express");
const authRoutes = require("../src/routes/auth.routes");
const cookieParser = require("cookie-parser");

// Server created:-
const app = express();

// Express middleware used:-
app.use(express.json());

// Express middleware used:-
app.use(cookieParser());

// Auth routes used:-
app.use("/api/auth", authRoutes)

// Server exported:-
module.exports = app;



