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

  // User vo mila me username krra hu to ye code chalega:-
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "Username alredy in use!",
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


// ^ User API Creation:-
router.get("/user", async (req, res) => {
  const token = req.cookies.token;

  // Agar token aya hi nahi tab ye krna hai:-
  if (!token) {
    return res.status(401).json({
      message: "Unautherized Token not found!",
    })
  }

  // Agar token aya h tab token ko check krna hai:-
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decoded.id,
    })

    res.status(200).json({
      message: "User fetched successfully!",
      user,
    })

  } catch (error) {
    res.status(401).json({
      message: "Unautherized Invalid token!",
    })
  }
})


//^ Login API Creation:-
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Username se find krenge esa koi username ka user hai ya nahi:-
  const user = await userModel.findOne({ username })

  if (!user) {
    return res.status(404).json({
      message: "User not found!"
    })
  }

  // User sahi lila to passoword check ki sahi hai ya nahi:-
  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password!"
    })
  }

  // Token banakr token cookie me dalo:-
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token);

  res.status(200).json({
    message: "User loggedin successfully!",
    user,
  })



})


//^ Login API Creation:-
router.get("/logout", async (req, res) => {
  res.clearCookie("token")

  res.status(200).json({
    message: "User logout successfully!",
  })
})


// router export kia gaya:-
module.exports = router;
