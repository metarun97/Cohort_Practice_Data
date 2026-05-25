// Required elements⬇️
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//* User Register API⬇️
const registerUser = async (req, res) => {
  const { username, email, password, fullName: { firstName, lastname } } = req.body;

  // If user already present in the database⬇️
  const isUserAlreadyExists = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  return res.status(409).json({
    message: "Username and email already exists"
  })

  // Hashing the password⬇️
  const hash = await bcrypt.hash(password, 10)

  // Now creating a new user for register⬇️
  const user = await userModel.create({
    username,
    email,
    password: hash,
    fullName: { firstName, lastName }
  })

  // Give token to a new user for register⬇️
  const token = jwt.sign({
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  }, process.env.JWT_SECRET, { expiresIn: "1d" })

  // Save token into the browser's cookies⬇️
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000  // 1 day
  })

  // Final success register user message⬇️
  res.status(201).json({
    message: "User register successfully✅",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      address: user.address,
    }
  })

}

// Exported data⬇️
module.exports = { registerUser };
