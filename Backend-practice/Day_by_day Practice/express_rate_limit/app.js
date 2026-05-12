const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();


const limiter = rateLimit({
  window: 1 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP,please try again after a minute."
})

// app.use(limiter);                                         // used for application level


app.post("/api/auth/register", limiter, (req, res) => {      // used on single route
  res.status(201).json({ message: "User regsitered successfully" })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

module.exports = app;





