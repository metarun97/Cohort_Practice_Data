const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


/**
 @name registerUser
 @description register a user expects username,email,password and role
 @access public
 */
const registerUser = async (req, res) => {

 const { username, email, password, role = "user" } = req.body;

 const isUserAlreadyExists = await userModel.findOne({
  $or: [
   { username },
   { email },
  ]
 })

 if (isUserAlreadyExists) {
  return res.status(409).json({
   message: "User already Exists!",
  })
 }

 try {

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
   username,
   email,
   password: hash,
   role
  })

  const token = jwt.sign(
   {
    id: user._id,
    role: user.role,
   }, process.env.JWT_SECRET);


  res.cookie("token", token);

  res.status(201).json({
   message: "User registerd Successfully!",
   user: {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
   },
  })


 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in user register!",
  })
 }

}


/**
 @name loginUser
 @description login a user expects username or email and password
 @access public
 */
const loginUser = async (req, res) => {

 const { username, email, password } = req.body;

 const user = await userModel.findOne({
  $or: [
   { username },
   { email },
  ]
 })

 if (!user) {
  return res.status(401).json({
   message: "Invalid credentials!",
  })
 }

 const isPasswordValid = await bcrypt.compare(password, user.password);

 if (!isPasswordValid) {
  res.status(401).json({
   message: "Invalid credentials!",
  })
 }

 try {

  const token = jwt.sign({
   id: user._id,
   role: user.role
  }, process.env.JWT_SECRET
  )

  res.cookie("token", token);

  res.status(200).json({
   message: "User loggedIn Successfully!",
   user: {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
   },
  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in user login!",
  })
 }
}



module.exports = { registerUser, loginUser };
