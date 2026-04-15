/* Required items */
const chatModel = require("../models/chat.model");

/* Create Chat function */
async function createChat(req, res) {
  const { title } = req.body;
  // user found:-
  const user = req.user;

  /* Creating a chat:-  */
  const chat = await chatModel.create({
    user: user._id,
    title
  })

  res.status(201).json({
    message: "Chat created successfully!",
    chat: {
      _id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    }
  })
}

/* export data */
module.exports = { createChat };


