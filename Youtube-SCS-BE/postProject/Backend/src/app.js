const express = require("express");
const multer = require("multer");
const uploadImage = require('./services/storage.service');
const postModel = require("./models/post.model");
const cors = require("cors");


const app = express();

app.use(cors({
 origin: "http://localhost:5173",
 credentials: true,
}))

app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() });


//* Create a post:-
app.post("/create-post", upload.single("image"), async (req, res) => {

 const result = await uploadImage(req.file?.buffer);

 const post = await postModel.create({
  image: result.url,
  caption: req.body.caption,
 })

 res.status(201).json({
  message: "Post created successfully!",
  post,
 })

})

//* Get all posts:-
app.get("/posts", async (req, res) => {

 const posts = await postModel.find();

 res.status(200).json({
  message: "Posts fetched successfully!",
  posts,
 })

})


module.exports = app;
