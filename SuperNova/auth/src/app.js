// Require dependencies⬇️
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");

// Create a Server⬇️
const app = express();

// Middleware to read req.body data⬇️
app.use(express.json());

// To read browser's cookie data⬇️
app.use(cookieParser());

// Use auth routes⬇️
app.use("/api/auth", authRoutes);

// Export element⬇️
module.exports = app;

