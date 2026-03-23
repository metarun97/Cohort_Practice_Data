// Express reuired here⬇️
const express = require("express");

// router created here⬇️
const router = express.Router();


// Middleware is between router and api⬇️
router.use((req, res, next) => {
  console.log("This middleware is between router and api");
  next();
})


// (/) route created here⬇️
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the server!",
  })
})

// router export here⬇️
module.exports = router;

