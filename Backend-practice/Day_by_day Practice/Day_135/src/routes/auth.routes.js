// Express required here⬇️
const express = require("express");
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

// Router created here⬇️
const router = express.Router();


// Register API:-
router.post("/register", async (req, res) => {
  const { username, password } = req.body;


  const user = await userModel.create({
    username, password
  })

  // Token given when user register:-
  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)


  res.cookie("token", token);

  res.status(201).json({
    message: "User register successfully",
    user,
  })
})


// Login API:-
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check for Incorrect username:-
  const user = await userModel.findOne({
    username: username
  })

  if (!user) {
    return res.status(401).json({
      message: "User not found!"
    })
  }
  // Check for Incorrect password:-
  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password!",
    })
  }
  // If both correct:-
  res.status(200).json({
    message: "User loggedIn successfully!"
  })
})

// User API:-
router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  // If token not find:-
  if (!token) {
    return json(401).json({
      message: "Unautherized!"
    })
  }

  // If token found then check it's format or it's correct or not:-
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decoded.id
    }).select("-password -__v")

    res.status(200).json({
      message: "User fetched successfully!",
      user,
    })

  } catch (error) {
    return res.status(401).json({
      message: "Unautherized - Invalid Token!"
    })
  }
})


// Router exported here⬇️
module.exports = router;
