// Express required here⬇️
const express = require("express");

// authRoutes required here⬇️
const authRoutes = require("./routes/auth.routes");

// require cookie-parser⬇️
const cookieParser = require("cookie-parser");

// Server created here⬇️
const app = express();

// Middleware for read req.body data⬇️
app.use(express.json());

// Use cookie parser⬇️
app.use(cookieParser());

// auth routes use here⬇️
app.use("/auth", authRoutes);


// App exported here⬇️
module.exports = app;
