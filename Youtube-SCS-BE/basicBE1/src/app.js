const express = require("express");


const app = express();

app.use(express.json());


const notes = [];

//* Create a note:-
app.post("/notes", (req, res) => {
 notes.push(req.body);

 res.status(201).json({
  message: "Note created successfully!",
 })
})

//* Fetch all notes:-
app.get("/notes", (req, res) => {

 res.status(200).json({
  message: "Note feteched successfully!",
  notes: notes,
 })
})

//* Delete a note:-
app.delete("/notes/:index", (req, res) => {

 const index = req.params.index;

 delete notes[index];

 res.status(200).json({
  message: "Note deleted successfully!",
  notes: notes,
 })
})

//* Update a note:-
app.patch("/notes/:index", (req, res) => {

 const index = req.params.index;
 const discription = req.body.discription;

  notes[index].discription = discription;

 res.status(200).json({
  message: "Note updated successfully!",
 })
})

module.exports = app;
