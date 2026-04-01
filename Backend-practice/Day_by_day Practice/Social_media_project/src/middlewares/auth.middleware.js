// Required items:-
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// Auth middleware:-
async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  // If token not found then do this:-
  if (!token) {
    return res.status(401).json({
      message: "Unautherized excess,please login first!"
    })
  }

  // If token found then do this and find the user behalf of the decoded:-
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findOne({
      _id: decoded.id,
    })

    req.user = user
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token,please login again!",
    })
  }
}

module.exports = { authMiddleware }
