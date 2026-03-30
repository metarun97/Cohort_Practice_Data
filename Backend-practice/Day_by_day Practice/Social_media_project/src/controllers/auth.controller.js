// Required item:-
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register controller:-
async function registerController(req, res) {
  const { username, password } = req.body;

  // If username is alredy present then check:-
  const existingUser = await userModel.findOne({ username })

  if (existingUser) {
    return res.status(409).json({
      message: "This username alreay exist!"
    })
  }

  // If username not exist then create a new user:-
  const user = await userModel.create({
    username, password: await bcrypt.hash(password, 10)
  })

  // Give token to the user:-
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully!",
    user,
  })
}


// Login controller:-
async function loginController(req, res) {
  const { username, password } = req.body;

  // Check username if it is matched or not:-
  const user = await userModel.findOne({ username })

  if (!user) {
    return res.status(400).json({
      message: "User not found!"
    })
  }

  // Check password if it is matched or not:-
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Invalid password!"
    })
  }

  // Give token to the user:-
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(200).json({
    message: "User loggedIn successfully!",
  })
}

module.exports = { registerController, loginController }
