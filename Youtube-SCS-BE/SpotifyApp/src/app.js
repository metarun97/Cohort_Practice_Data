const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');

/* Server created */
const app = express();

/* Middleware for ready req.body data */
app.use(express.json());

/* Middleware for cookieParsing */
app.use(cookieParser());

/* Auth routes setup with prefix */
app.use("/api/auth", authRoutes);

/* Music routes setup with prefix */
app.use("/api/music", musicRoutes);


module.exports = app;
