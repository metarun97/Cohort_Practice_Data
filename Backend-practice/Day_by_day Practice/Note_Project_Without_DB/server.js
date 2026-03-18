//* Require express for further use:-
const express = require('express');

//* Server created here:-
const app = express();

//* Middleware used for reading json data of the server:-
app.use(express.json());

//* Server programmed data:-
app.get('/', (req, res) => {
  res.send("hello from the server");
})

//* Empty notes array:-
const notes = [];

//* POST API for add notes on the server:-
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({
    message: "Note added successfully!",
    notes: notes,
  })
})

//* GET API for get all data from the server:-
app.get("/notes", (req, res) => {
  res.json({
    message: "Notes fetched successfully!",
    notes: notes,
  })
})

//* DELETE API for delete data from the server:-
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "Note deleted successfully!",
  })
})

//* PATCH API for update data of the server:-
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title, content } = req.body;

  notes[index].title = title;
  notes[index].content = content;
  res.json({
    message: "Note updated successfully",
    notes: notes
  })
})

//* Server started here:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
