// Required elements like (express,connectToDb function and dns)⬇️
const express = require("express");
const connectToDb = require('./src/db/db');
const dns = require("dns");
const noteModel = require("./src/models/note.model");


// Setting DNS for my server⬇️
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//Server created here⬇️
const app = express();

// Middleware for read server data⬇️
app.use(express.json());

// DB connection function called here⬇️
connectToDb();


// POST API for create note⬇️
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  await noteModel.create({
    title, content
  })
  res.json({
    message: "Note created successfully!"
  })
})

// GET API for get notes⬇️
app.get('/notes', async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    message: "Notes fetched successfully!",
    notes,
  })
})


// UPDATE API for update note⬇️
app.patch('/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;

  await noteModel.findOneAndUpdate({
    _id: noteId,
  }, {
    title: title,
    content: content
  })
  res.json({
    message: "Note updated successfully!",
  })
})




// DELETE API for delete note⬇️
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  await noteModel.findOneAndDelete({
    _id: noteId,
  })
  res.json({
    message: "Note deleted successfully!",
  })
})


//Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
