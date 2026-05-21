const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.status(201).json({ message: "Hello world" });
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
