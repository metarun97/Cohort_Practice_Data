// Express required here:-
const express = require("express");

// userModel required here:-
const userModel = require("../models/user.model");

// userModel required here:-
const cookieParser = require("cookie-parser");

// jsonwebtoken required here:-
const jwt = require("jsonwebtoken");


// Router created here:-
const router = express.Router();


//^ Register API to register user:-
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //* Check if your given username is already in use:-
  const existingUser = await userModel.findOne({ username });

  // Check if it is exist then do this:-
  if (existingUser) {
    return res.status(409).json({
      message: "This username alreay exists!"
    })
  }

  //* Create the new user with your both data:-
  const user = await userModel.create({ username, password })

  // Give token to the user:-
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully!",
    user,
  })
})




// Router exported here:-
module.exports = router;




