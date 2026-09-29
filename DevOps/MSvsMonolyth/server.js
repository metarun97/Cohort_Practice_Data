const express = require("express");


const app = express();

app.get("/", (req, res) => {
  for (let i = 0; i < 1000000000; i++) { }
  res.send("Hello world");
})


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
})
