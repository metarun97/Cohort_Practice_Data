// Required elements:-
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  // If token not found in cookies:-
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    })
  }

  try {
    // Verify token and get user data and pass data to req.user:-
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = decoded;

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    })
  }
}


module.exports = { authMiddleware };
