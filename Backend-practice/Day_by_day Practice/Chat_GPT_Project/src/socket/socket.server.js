/* Required items */
const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const aiService = require("../services/ai.service");
const messageModel = require("../models/message.model");


/* Socket function initiated here:- */
function initSocketServer(httpServer) {
  const io = new Server(httpServer, {/* options */ });

  // Middleware that check if user logged in then it can connect to socket server:-
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    // If token not found:-
    if (!cookies.token) {
      next(new Error("Authentication error: Token not provided!"));
    }

    // Now found the token & check it is comming from valid user then add it inside socket's user:-
    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded.id);
      socket.user = user;
      next();
    } catch (error) {
      next(new Error("Authentication errror: Invalid Token!"))
    }
  })


  // Socket connection:-
  io.on("connection", (socket) => {
    // console.log("New socket user:", socket.user);
    // console.log("New socket user's id:", socket.id);


    socket.on("ai-message", async (messagePayload) => {
      // console.log(messagePayload);

      await messageModel.create({
        chat: messagePayload.chat,
        user: socket.user._id,
        content: messagePayload.content,
        role: "user"
      })

      const chatHistory = (await messageModel.find({
        chat: messagePayload.chat,
      }).sort({ createdAt: -1 }).limit(20).lean()).reverse();

      // console.log(chatHistory)

      const response = await aiService.generateResponse(chatHistory.map(item => {
        return {
          role: "user",
          parts: [{ text: item.content }],
        }
      }));


      await messageModel.create({
        chat: messagePayload.chat,
        user: socket.user._id,
        content: response,
        role: "model"
      })


      socket.emit("ai-response", {
        content: response,
        chat: messagePayload.chat
      })


    })
  })
}

/* Export data:- */
module.exports = initSocketServer;
