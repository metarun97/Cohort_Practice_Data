// Express required for further use⬇️
const express = require("express");

// Export the DB file from the DB folder⬇️
const connectToDB = require('./src/db/db');

// Call the connection function of DB:-
connectToDB();

// Server created here⬇️
const app = express();


// Middleware used to read req.body's data by the server⬇️
app.use(express.json());


// Server programmed here:-
app.get("/", (req, res) => {
  res.send("Hello from the Server!")
})

// POST API for send data to server⬇️
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
})


// Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
