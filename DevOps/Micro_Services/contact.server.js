const express = require("express");

const app = express();


app.get("/contact", (req, res) => {

  for (let i = 0; i < 1000000000; i++) { }
  res.send("Contact Us")
})

app.listen(3002, () => {
  console.log("Server is running  http://localhost:3000")
})
