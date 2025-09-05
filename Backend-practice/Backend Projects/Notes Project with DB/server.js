const express = require('express');
const connectToDb = require('./src/db/db');
const noteModel = require('./src/models/note.model');

const app = express();
app.use(express.json());
connectToDb();

//^ POST API for add single data:-

app.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  await noteModel.create({
    title,
    content,
  });
  res.json({
    message: 'Note created Successfully',
  });
});

//^ GET API for fetch all data:-

app.get('/notes', async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: 'Notes fetch successfully',
    notes,
  });
});

//^ DELETE API for Delete single data:-

app.delete('/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    message: 'Note deleted successfully',
  });
});

//^ PATCH API for update single data:-

app.patch('/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
    }
  );
  res.json({
    message: 'Note updated successfully',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
