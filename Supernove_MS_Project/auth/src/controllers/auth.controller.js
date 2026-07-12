// Required items:-
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require("../db/redis");
const { json } = require("express");


// RegisterUser  API:-
const regitserUser = async (req, res) => {
  try {
    const { username, email, password, fullName: { firstName, lastName }, role } = req.body;

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
      fullName: { firstName, lastName },
      role: role || 'user',
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

// Login  API:-
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

// currentUser  API:-
const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    message: "Current user fetched successfully",
    user: req.user
  })
}

// logoutUser  API:-
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

// getUserAddresses  API:-
const getUserAddresses = async (req, res) => {
  try {
    const id = req.user.id;

    // Find user by id:-
    const user = await userModel.findById(id).select("addresses");

    // If not found then do this:-
    if (!user) {
      return res.status(404), json({
        message: "User not found",
      })
    }

    // final response:-
    res.status(200).json({
      message: "Addresses fetched successfully",
      addresses: user.addresses,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// addUserAddress  API:-
const addUserAddress = async (req, res) => {
  const id = req.user.id;
  const { street, state, city, pincode, country, isDefault } = req.body;

  // find user by id and update/create a new address:-
  const user = await userModel.findByIdAndUpdate({ _id: id }, {
    $push: {
      addresses: {
        street,
        state,
        city,
        pincode,
        country,
        isDefault,
      }
    }
  }, { returnDocument: "after" })

  // If user not found:-
  if (!user) {
    return res.status(404).json({
      message: "User not found."
    })
  }

  // final response:-
  res.status(201).json({
    message: "Address added successfully.",
    address: user.addresses[user.addresses.length - 1],
  })

}

// removeUserAddress  API:-
const deletUserAddress = async (req, res) => {
  try {
    const id = req.user.id;
    const { addressId } = req.params;


    // Find the user and check whether the address exists before attempting removal
    const userBefore = await userModel.findById(id).select("addresses");
    if (!userBefore) {
      return res.status(404).json({ message: "User not found" });
    }

    const addressExistsBefore = userBefore.addresses.some(addr => addr._id.toString() === String(addressId));

    // Address doesn't exist on the user
    if (!addressExistsBefore) {
      return res.status(404).json({ message: "Address not found" });
    }

    // Remove the address subdocument from the user's addresses array and return the updated document
    const user = await userModel.findOneAndUpdate(
      { _id: id },
      { $pull: { addresses: { _id: addressId } } },
      { returnDocument: "after" }
    );

    // final response:-
    res.status(200).json({
      message: "Address deleted successfully.",
      addresses: user.addresses,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Exported items:-
module.exports = { regitserUser, loginUser, getCurrentUser, logoutUser, getUserAddresses, addUserAddress, deletUserAddress };
