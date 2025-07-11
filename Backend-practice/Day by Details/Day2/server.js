const express = require('express');


// Server creation:-
const app = express();

// Home Page:-
app.get('/home', (req, res) => {
  res.send('Welcome on home page');
});

// About Page:-

app.get('/about', (req, res) => {
  res.send('Welcome on about page');
});


// Run command for server:-
app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
