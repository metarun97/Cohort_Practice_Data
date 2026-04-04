// Express require kia:-
const express = require("express");


// Server create kia:-
const app = express();


// Server ka data padhne k liye middleware:-
app.use(express.json());


// Server export kia:-
module.exports = app;
