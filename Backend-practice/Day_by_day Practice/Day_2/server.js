const express = require("express");


const app = express();

// /home route

app.get('/home', (req, res) => {
  res.send("Welcome to homepage")
})

// /about route

app.get('/about', (req, res) => {
  res.send("Welcome to aboutpage")
})



app.listen(3000, () => {
  console.log("server is running on port 3000")
})
