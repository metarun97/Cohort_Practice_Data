const express = require('express');
const connectToDb = require("./src/db/db")

connectToDb();
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/notes', (req, res) => {
  const { title, discription } = req.body;
  console.log(title, discription);
});

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
