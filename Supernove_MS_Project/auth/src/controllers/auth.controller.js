// Required items:-
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require("../db/redis");


// Register user API:-
const regitserUser = async (req, res) => {
  try {
    const { username, email, password, fullName: { firstName, lastName } } = req.body;

    // Find the exixting user in database:-
    const isUserAlrearyExists = await userModel.findOne({
      $or: [
        { username },
        { email }
      ]
    })

    // Check user already exist:-
    if (isUserAlrearyExists) {
      return res.status(409).json({
        message: "User already exists by this username or email",
      })
    }

    // Create password hash format for security:-
    const hash = await bcrypt.hash(password, 10);

    // If user not exist in database then create a new user:-
    const user = await userModel.create({
      username,
      email,
      password: hash,
      fullName: { firstName, lastName }
    })

    // Give token to the user:-
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Save token in cookie:-
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000    // 1 day
    })


    // final response:-
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        addresses: user.addresses,
      }
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// Login user API:-
const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Find user with select password:-
    const user = await userModel.findOne({
      $or: [
        { username },
        { email }
      ]
    }).select("+password");

    // If user not found:-
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials.",
      })
    }

    // Match the password of user:-
    const isMatched = await bcrypt.compare(password, user.password || "");

    // If password not matched:-
    if (!isMatched) {
      return res.status(401).json({
        message: "Invalid Password credential.",
      })
    }

    // Give token to the user:-
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
      process.env.JWT_SECRET, { expiresIn: "1d" }
    )

    // Save token in cookie:-
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 1day
    })

    // Final response:-
    res.status(200).json({
      message: "User loggedIn successfully.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        addresses: user.addresses,
      }
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }

}

// currentUser user API:-
const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    message: "Current user fetched successfully",
    user: req.user
  })
}

// logoutUser user API:-
const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  try {
    // If token found set in blacklist:-
    if (token) {
      await redis.set(`Blacklist:${token}`, "true", "EX", 24 * 60 * 60);
    }

    // Clear the token from cookie:-
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
    })

    // final response:-
    res.status(200).json({
      message: "User logout successfully.",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


// Exported items:-
module.exports = { regitserUser, loginUser, getCurrentUser, logoutUser };
