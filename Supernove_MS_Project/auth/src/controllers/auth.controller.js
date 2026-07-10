// Required items:-
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      stack: err.stack
    })

  }
}

// Exported items:-
module.exports = { regitserUser };
