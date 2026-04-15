/* Required items */
const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");


/* Socket function initiate here:- */
function initSocketServer(httpServer) {
  const io = new Server(httpServer, {/* options */ });

  //* Middleware to check if vaid user here and have a token then it can connect to Socket:-
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      next(new Error("Authentication error: Token not found!"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded.id);
      socket.user = user;
      next();

    } catch (err) {
      next(new Error("Authentication error: Invalid token!"))
    }
  })


  io.on("connection", (socket) => {
    // console.log("New socket user", socket.user);
    // console.log("New socket connection", socket.id);

    socket.on("ai-message", async (messagePayload) => {
      console.log(messagePayload);
    })

  })
}

/* Export data:- */
module.exports = initSocketServer;
