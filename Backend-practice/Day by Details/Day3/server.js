const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

//* Get method:-
app.get('/notes', (req, res) => {
  res.send('hello world');
});

//* Post method:-b752.
app.post('/notes', (req, res) => {
  // console.log(req.body);
  notes.push(req.body);
  res.json({
    message: 'Note added Successfully',
    notes: notes,
  });
});

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
