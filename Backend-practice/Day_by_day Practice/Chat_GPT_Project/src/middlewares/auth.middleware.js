/* Required items */
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");


/* Protected user for chat:- */
async function authUser(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized!"
    })
  }

  try {
    /* Token verified here */
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /* Find user by decoded id */
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next()

  } catch (err) {
    res.status(401).json({
      message: "Unauthorized!",
    })
  }
}

/* Export data */
module.exports = { authUser };
