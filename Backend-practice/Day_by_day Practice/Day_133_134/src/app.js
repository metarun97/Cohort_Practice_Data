// Express required here⬇️
const express = require("express");
// authRoutes required here⬇️
const authRoutes = require("./routes/auth.routes");

// Server created here⬇️
const app = express();

// Middleware used to read req.body data here⬇️
app.use(express.json());


// Auth routes used here⬇️
app.use('/auth', authRoutes);


// app ecported here⬇️
module.exports = app;
