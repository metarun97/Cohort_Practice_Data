import userModel from "../models/user.model.js";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import sessionModel from "../models/session.model.js";

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


  const refreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

  const session = await sessionModel.create({
   user: user._id,
   refreshTokenHash,
   ip: req.ip,
   userAgent: req.headers["user-agent"],
  })


  const accessToken = jwt.sign({ id: user._id, sessionId: session._id }, config.JWT_SECRET, { expiresIn: "15m" });

  res.cookie("refreshToken", refreshToken, {
   httpOnly: true,
   secure: true,
   sameSite: "strict",
   maxAge: 7 * 24 * 60 * 60 * 1000,       // 7days
  })

  res.status(201).json({
   message: "User registered successfully!",
   user: {
    id: user._id,
    username: user.username,
    email: user.email,
    accessToken,
   }
  })


 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in Register a user!",
  })
 }
}


/**
 * @name getMe
 * @description get current logged in user
 * @access private
 */
export const getMe = async (req, res) => {

 try {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
   return res.status(404).json({
    message: "Token not found!",
   })
  };

  const decoded = jwt.verify(token, config.JWT_SECRET);

  const user = await userModel.findById(decoded.id);

  res.status(200).json({
   message: "User fetched successfully!",
   user: {
    id: user._id,
    username: user.username,
    email: user.email,
   }
  });

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in getMe a user!",
  })
 }

}


/**
 * @name refreshToken
 * @description get a new accessToken for the user
 * @access private
 */
export const refreshToken = async (req, res) => {

 const refreshToken = req.cookies.refreshToken;

 if (!refreshToken) {
  return res.status(401).json({
   message: "Refresh token not found!",
  })
 }

 const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

 const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

 const session = await sessionModel.findOne({
  refreshTokenHash,
  revoked: false,
 })

 if (!session) {
  return res.status(401).json({
   message: "Invalid Refresh token!",
  })
 }

 const accessToken = jwt.sign({ id: decoded.id }, config.JWT_SECRET, { expiresIn: "15m" });

 const newRefreshToken = jwt.sign({ id: decoded.id }, config.JWT_SECRET, { expiresIn: "7d" });

 const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");

 session.refreshTokenHash = newRefreshTokenHash;
 await session.save();

 res.cookie("refreshToken", newRefreshToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,    // 7 days
 })

 res.status(200).json({
  message: "Access token refreshed successfully!",
  accessToken,
 })

}


/**
 * @name logout
 * @description logout a user
 * @access public
 */
export const logout = async (req, res) => {

 const refreshToken = req.cookies.refreshToken;

 if (!refreshToken) {
  return res.status(400).json({
   message: "Refresh token not found!",
  })
 }

 const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

 const session = await sessionModel.findOne({
  refreshTokenHash,
  revoked,
 })

 if (!session) {
  return res.status(400).json({
   message: "Invalid Refresh token!",
  })
 }

 session.revoked = true;
 await session.save();

 res.clearCookie("refreshToken");

 res.status(200).json({
  message: "User logout successfully!",
 })
}
