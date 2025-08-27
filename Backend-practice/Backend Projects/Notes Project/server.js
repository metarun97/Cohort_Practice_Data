const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

//* POST - Creating a post on server
app.post('/notes', (req, res) => {
  notes.push(req.body);
  res.json({
    message: 'Note created successfully',
  });
});

//* GET - Get all posts from server:-
app.get('/notes', (req, res) => {
  res.json({
    message: 'Notes fetched successfully',
    notes,
  });
});

//* DELETE - delete a post from server:-
app.delete('/notes/:index', (req, res) => {
  const index = req.params.index;

  delete notes[index];
  res.json({
    message: 'Note deleted successfully',
  });
});

//* PATCH - update a post's data on server:-
app.patch('/notes/:index', (req, res) => {
  const index = req.params.index;
  const { title } = req.body;

  notes[index].title = title;
  res.json({
    message: 'Note updated successfully',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
