const express = require('express');
const connetToDb = require('./src/db/db');
const noteModel = require('./src/models/note.model');

connetToDb();
const app = express();
app.use(express.json());

//* Create Code:-
app.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  // console.log(title, content);
  await noteModel.create({
    title,
    content,
  });
  res.json({
    message: 'Note created Successfully',
  });
});

//* Read Code:-

app.get('/notes', async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: 'Notes fetched successfully',
    notes,
  });
});

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
