// Required items:-
const jwt = require("jsonwebtoken");

const createAuthMiddleware = (roles = ["user"]) => {
  return (req, res, next) => {
    const authHeader = req.headers?.authorization;
    const token = req.cookies?.token || (authHeader ? authHeader.split(" ")[1] : null);

    // if token not found:-
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized : No token provided",
      })
    }

    try {
      // Take out decoded data from the token:-
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // if decoeded's role isn't include in roles array:-
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "Forbidden : Insufficient permission",
        })
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        message: "Unauthorized : Invalid token",
      })
    }
  }
}


// exported items:-
module.exports = createAuthMiddleware;
