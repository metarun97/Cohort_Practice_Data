// Required items:-
const postModel = require("../models/post.model");
const generateCaption = require("../service/ai.service");
const uploadFile = require("../service/storage.service");
const { v4: uuidv4 } = require("uuid");

// Post controller function created:-
async function createPostController(req, res) {
  const file = req.file;
  // console.log("file", file);

  // Change image as base64Image:-
  const base64Image = new Buffer.from(file.buffer).toString("base64");

  // Create caption for image:-
  const caption = await generateCaption(base64Image);

  // upload to imageKit:-
  const result = await uploadFile((file.buffer), `${uuidv4()}`)

  // Post created:-
  const post = await postModel.create({
    caption: caption,
    image: result.url,
    user: req.user._id
  })

  res.status(201).json({
    message: "Post created successfully!",
    post,
  })
}

// Post controller exported:-
module.exports = { createPostController };
