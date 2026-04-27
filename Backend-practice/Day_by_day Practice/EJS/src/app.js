// Express required here:-
const express = require("express");

// Morgan required here:-
const morgan = require("morgan");

// Server created here:-
const app = express();

// Morgan used here:-
app.use(morgan("dev"));

// Engine set here:-
app.set("view engine", "ejs");


// "/api/auth/register" api created here:-
app.post("/api/auth/register", (req, res) => {
  res.send("Register endpoint.")
})

// "/" api created here:-
// app.get('/', (req, res) => {
// res.render("index", { message: "Hello from EJS" })
// })

// "/" api created here:-
// app.get('/', (req, res) => {
//   res.render("index", {
//     messages: [
//       "Hello from EJS",
//       "We used EJS here",
//       "BE developer must learn EJS",
//       "Logical delimeters different",
//       "Printing delimeters different"
//     ]
//   })
// })


app.get('/', (req, res) => {
  res.render("index", {
    htmls: [
      `<h1>Hello world</h1>`,
      `<h2>This is heading second.</h2>`,
      `<p>This is sample paragraph for demo.</p>`,
      `<button>Click Me</button>`
    ]
  })
})


// Server exported here:-
module.exports = app;
