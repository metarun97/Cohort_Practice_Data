// Required items:-
const postModel = require("../models/post.model");
const generateCaption = require("../service/ai.service");


// Post controller function created:-
async function createPostController(req, res) {
  const file = req.file;
  // console.log("file", file);


  const base64Image = new Buffer.from(file.buffer).toString("base64");
  // console.log("base64Image", base64Image);

  const caption = await generateCaption(base64Image);
  // console.log(caption);

  res.json({
    caption,
  }
  )
}






// Post controller exported:-
module.exports = { createPostController };
