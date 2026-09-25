const express = require("express");
const morgan = require("morgan");


/* Server created */
const app = express();


/* Tell express what is ongoing on your server */
app.use(morgan("dev"))

/* Tell express to view engine of ejs */
app.set("view engine", "ejs")
app.set("views", "./src/views");

app.post("/api/auth/register", (req, res) => {
  res.status(201).json({
    message: "User registered",
  })
})

app.get("/", (req, res) => {
  res.render("index")
  // res.render("index",{message:"Hello from EJS"})  // for Escaped delimeter use
  // res.render("index", {
  //   htmls: [
  //     `Hello from EJS`,
  //     `<h1>This is main heading</h1>`,
  //     `<h2>This is sum heading</h2>`,
  //     `<p>Sample message</p>`,
  //     `<button>Click Me!</button>`,
  //   ]
  // })  // for unescaped delimeter use
})


module.exports = app;
