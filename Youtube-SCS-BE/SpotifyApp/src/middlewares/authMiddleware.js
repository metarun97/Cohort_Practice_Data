const jwt = require("jsonwebtoken");


/* Middleware for Artist */
const authArtist = (req, res, next) => {

 const token = req.cookies?.token;

 if (!token) {
  return res.status(401).json({
   message: "Unautherized!",
  })
 }

 try {

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== "artist") {
   return res.status(403).json({
    message: "Forbidden!",
   })
  }

  req.user = decoded

  next();

 } catch (error) {
  console.error(error);

  res.status(401).json({
   message: "Unautherized!",
  })
 }

}


/* Middleware for User */
const authUser = (req, res, next) => {

 const token = req.cookies?.token;

 if (!token) {
  return res.status(401).json({
   message: "Unautherized!",
  })
 }

 try {

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== "user") {
   return res.status(403).json({
    message: "Forbidden!",
   })
  }

  req.user = decoded

  next();

 } catch (error) {
  console.error(error);

  res.status(401).json({
   message: "Unautherized!",
  })
 }

}

module.exports = { authArtist, authUser };
