// Express require kia:-
const express = require("express");
// postRoutes require kia:-
const postRoutes = require("./routes/post.routes");

// Server create kia:-
const app = express();


// Server ka data padhne k liye middleware:-
app.use(express.json());

// postRoutes use krna:-
app.use("/api/post", postRoutes);

// Server export kia:-
module.exports = app;
