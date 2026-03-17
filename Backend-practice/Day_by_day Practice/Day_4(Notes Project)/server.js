// Express required for further use⬇️
const express = require("express");

// Server created here⬇️
const app = express();

// Note:- By default server can't read request.body's code so we use this middleware⬇️
app.use(express.json());


// Empty notes array⬇️
const notes = [];

// (POST API) for send data to server⬇️

app.post('/notes', (req, res) => {
  notes.push(req.body);
  res.json({
    message: 'Note added successfully!',
    notes: notes,
  })
})

// (GET API) for get data from server⬇️



// Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})



