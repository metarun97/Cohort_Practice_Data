const express = require('express');

//* Server start code:-
const app = express();

//* Server's middleware code (to read data properly):-
app.use(express.json());

let notes = [];

//* POST Method code:-

app.post('/notes', (req, res) => {
  // console.log(req.body);
  notes.push(req.body);
  res.json({
    message: 'note added successfully!',
  });
});

//* GET Method code:-

app.get('/notes', (req, res) => {
  res.json(notes);
});

//* DELETE Method code:-
// notes/:index

app.delete('/notes/:index', (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: 'node deleted successfully',
  });
});

//* DELETE Method code:-
// notes/:index

app.patch('/notes/:index', (req, res) => {
  const index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;
});

//* Server running code:-
app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
