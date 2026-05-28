// Require dependencies⬇️
const userMordel = require("../models/user.model");
const jwt = require("jsonwebtoken");


// Authentication middleware function⬇️
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  // Check if token is present⬇️
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Verify token and extract user info⬇️
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set decoded value in the user ⬇️
    const user = decoded;

    // Attach user info to req⬇️
    req.user = user;

    // Proceed to next middleware or route handler⬇️
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
      error: error && error.message ? error.message : error,
    });

  }
}

// Export middleware⬇️
module.exports = { authMiddleware };
