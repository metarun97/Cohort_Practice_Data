// Express required here-
const express = require("express");
const userModel = require("../models/user.model");

// Router created here⬇️
const router = express.Router();


// Register API:-
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username, password
  })

  res.status(201).json({
    message: "User registered successfully!",
    user,
  })

})


// Login API:-
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username
  })

  // If username doesn't match⬇️
  if (!user) {
    return res.status(401).json({
      message: "Invalid User!"
    })
  }

  const isPasswordValid = password == user.password;

  // If password doesn't match⬇️
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password!"
    })
  }

  // If username and password matched⬇️
  res.status(200).json({
    message: "User loggedIn successfully!",
  })

})


// Router exported here⬇️
module.exports = router;
