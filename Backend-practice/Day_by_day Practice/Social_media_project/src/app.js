// Express required here:-
const express = require("express");

// Express required here:-
const authRoutes = require("./routes/auth.routes");


// Server created here:-
const app = express();

// use express.json middleware to read server data:-
app.use(express.json());


// Auth routes called here:-
app.use('/auth', authRoutes)


// Server exported here:-
module.exports = app;
