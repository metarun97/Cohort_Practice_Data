// Required elements:-
require("dotenv").config();
const app = require("./src/app");
const { Server } = require("socket.io");
const { createServer } = require("http");
const generateContent = require("./src/service/ai.service");
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  },

});

// Short term memory:-
const chatHistory = [];

io.on("connection", (socket) => {
  console.log('A user connected!')

  socket.on("disconnect", () => {
    console.log('A user disconnected!')
  })


  /* AI message */
  socket.on("ai-message", async (data) => {
    console.log("AI message recieved:", data);

    chatHistory.push({
      role: "user",
      parts: [{ text: data }]
    })


    const response = await generateContent(chatHistory);
    // console.log(response);

    chatHistory.push({
      role: "model",
      parts: [{ text: response }]
    })


    socket.emit("ai-message-response", response);

  })
});


// Server started:-
httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
})

