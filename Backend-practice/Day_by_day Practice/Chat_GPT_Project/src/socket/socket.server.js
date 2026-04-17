/* Required items */
const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const aiService = require("../services/ai.service");
const messageModel = require("../models/message.model");


/* Socket function initiate here:- */
function initSocketServer(httpServer) {
  const io = new Server(httpServer, {/* options */ });

  //* Middleware to check if vaid user here and it has a valid token only  then it can connect to Socket:-
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    // If token not found then show error ruther then you check user by id and set user in socket's
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
      console.log(messagePayload);  /* {chat,content} */



      // save message when user send a message to AI model:-
      await messageModel.create({
        chat: messageModel.chat,
        user: socket.user._id,
        content: messagePayload.content,
        role: "user",
      })

      const chatHistory = await messageModel.find({
        chat: messagePayload.chat
      })

      // console.log("Chat History:", chatHistory.map((item) => {
      //   return {
      //     role: item.role,
      //     part: [{ text: item.content }]
      //   }
      // }));:


      try {
        const response = await aiService.generateResponse(chatHistory.map((item) => {
        return {
          role: item.role,
          part: [{ text: item.content }]
        }
      }));

        // Save message when AI model send us a message back:-
        await messageModel.create({
          chat: messageModel.chat,
          user: socket.user._id,
          content: response,
          role: "model",
        })

        socket.emit("ai-response", {
          content: response,
          chat: messagePayload.chat,
        })
      } catch (error) {
        socket.emit("ai-response", {
          error: "AI is busy, try again later 🙏"
        })
        console.log(error);
      }
    })

  })
}

/* Export data:- */
module.exports = initSocketServer;
