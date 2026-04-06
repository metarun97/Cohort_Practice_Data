// Express require kia:-
const express = require("express");
const authRoutes = require("../src/routes/auth.routes");
const cookieParser = require("cookie-parser");

// Server banaya kia:-
const app = express();

// Middleware jo req,body ka data padhne me help krega:-
app.use(express.json());

// cookieParser use kia:-
app.use(cookieParser());

// authRoutes use kiye:-
app.use("/api/auth", authRoutes);

// Server export kia:-
module.exports = app;
