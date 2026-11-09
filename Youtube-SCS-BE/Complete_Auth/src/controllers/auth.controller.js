import userModel from "../models/user.model.js";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';


/**
 * @name register
 * @description exprects username,email and password in req.body
 * @access public
 */
export const register = async (req, res) => {
 try {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
   $or: [
    { username },
    { email }
   ]
  })

  if (isUserAlreadyExists) {
   return res.status(400).json({
    message: "User already Exists!",
   })
  }

  const hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
   username,
   email,
   password: hashPassword,
  })


  const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" });


  res.status(201).json({
   message: "User registered successfully!",
   user: {
    id: user._id,
    username: user.username,
    email: user.email,
    token,
   }
  })


 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in Register a user!",
  })
 }
}



export const getMe = (req, res) => {

 try {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
   return res.status(404).json({
    message: "Token not found!",
   })
  }


  const decoded = jwt.verify(token, config.JWT_SECRET);

  console.log(decoded);

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in getMe a user!",
  })
 }

}
