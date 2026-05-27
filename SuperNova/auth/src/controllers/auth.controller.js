// Require dependencies⬇️
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register user controller function⬇️
const registerUser = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;

    //  Check if user with same username or email already exists⬇️
    const isUserAlreadyExists = await userModel.findOne({
      $or:
        [
          { username },
          { email }
        ]
    });

    // Check if user with same username or email already exists⬇️
    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "User with the same username or email already exists"
      });
    }

    // Hash the password⬇️
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user document⬇️
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      fullName
    });

    // create token⬇️
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // set in cookie⬇️
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day,
    });

    // final response⬇️
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        addresses: user.addresses,
      }
    })
  } catch (error) {
    console.log("Error in registerUser controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Login user controller function⬇️
const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log(username, email, password)
    // Find user by username or email and include password field⬇️
    const user = await userModel.findOne({
      $or: [
        { username },
        { email }
      ]
    }).select("+password");

    // Check if user exists⬇️
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    // Compare provided password with hashed password in database⬇️
    const isMatch = await bcrypt.compare(password, user.password);

    // If password does not match⬇️
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // create token⬇️
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // set in cookie⬇️
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day,
    });


    // final response⬇️
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
        addresses: user.addresses,
      }
    })
  } catch (err) {
    console.log("Error in loginUser controller:", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

// Export element⬇️
module.exports = { registerUser, loginUser };
