// express require kia gaya:-
const express = require("express");

// userModel require kia gaya h:-
const userModel = require("../models/user.model");


// jsonwebtoken require kiya gaya:-
const jwt = require("jsonwebtoken");

// router create kia gaya:-
const router = express.Router();


//^ Register API Creation:-
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //* Agar username phle se use me h to ye check karo:-
  const isUserAlreadyExist = await userModel.findOne({
    username
  })

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "User alredy in use!",
    })
  }


  //* Agar username phle se use me nahi h to new user banao:-
  const user = await userModel.create({
    username, password
  })

  // User ko token banakr do:-
  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET);

  // Token ko cookie me save karo:-
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully!",
    user
  })
})




// router export kia gaya:-
module.exports = router;
