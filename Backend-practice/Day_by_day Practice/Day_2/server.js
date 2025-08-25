//^ Yaha server declare hua ki vo kisey banra h:-
const express = require('express');

//^ Yaha server bangya:-
const app = express();

//* /home => Hello welcome to Home page
//* /about => Hello welcome to About page

//^ Isme homepage request ka hume response mila hai:-
app.get('/home', (req, res) => {
  res.send('Hello welcome to Home page');
});

//^ Isme aboutpage request ka hume response mila hai:-
app.get('/about', (req, res) => {
  res.send('Hello welcome to About page');
});

//^ Yaha server start kr dia usne listen krna chalu kr dia:-
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
