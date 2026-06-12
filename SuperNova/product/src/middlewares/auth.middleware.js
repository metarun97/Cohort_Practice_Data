/* Required elements */
const jwt = require("jsonwebtoken");

/* Authentication creation function */
const createAuthMiddleware = (roles = ["user"]) => {
  return function authMiddleware(req, res, next) {
    const token = req.cookies?.token || req.headers?.authorization?.split(" ")['1'];

    /* If token not found */
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided.",
      })
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      /* Checking that when role that same role isn't present in the decoded's role */
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "Forbidden: Insuficient permissions",
        })
      }

      /* If role present then det user as decoded */
      const user = decoded;
      next();

    } catch (error) {
      res.status(401).json({
        message: "Unauthorized: Invalid token",
      })
    }
  }
}


/* Export element */
module.exports = createAuthMiddleware;
