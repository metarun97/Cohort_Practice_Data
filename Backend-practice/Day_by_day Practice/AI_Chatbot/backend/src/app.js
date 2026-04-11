// Required elements:-
const express = require("express");

// Server created:-
const app = express();



app.get("/", (req, res) => {
  res.send("Hello world!")
})



// Server exported:-
module.exports = app;
