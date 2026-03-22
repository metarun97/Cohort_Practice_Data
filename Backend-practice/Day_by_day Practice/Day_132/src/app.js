// Express reuired here⬇️
const express = require("express");
const indexRoutes = require("./routes/index.routes");


// Server created here⬇️
const app = express();

// Middleware between app and routes⬇️
app.use((req,res,next)=>{
  console.log("This middleware is between app and route");
  next();
})

// (/) route use here⬇️
app.use("/", indexRoutes);


// Server exported here⬇️
module.exports = app;
