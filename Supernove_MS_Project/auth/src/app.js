const express = require("express");
const cookieParser = require("cookie-parser");
const dns = require("dns");
const authRoutes = require("./routes/auth.routes");

// DNS set manually:
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Server created:
const app = express();

// Middleware for reading req.body data:
app.use(express.json());

// Middleware for reading cookies in browser:
app.use(cookieParser());

// Auth endpoint:-
app.use("/api/auth/", authRoutes);


// Exported item:
module.exports = app;
