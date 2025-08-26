const express = require('express');

const app = express();

//* /home -> Welcome to the homepage:-
app.get('/home', (req, res) => {
  res.send('Welcome to the Home page');
});

//* /about -> Welcome to the homepage:-
app.get('/about', (req, res) => {
  res.send('Welcome to the About page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
