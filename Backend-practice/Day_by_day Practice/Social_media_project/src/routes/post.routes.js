// Required items:-
const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { createPostController } = require("../controllers/post.controller");

// router created:-
const router = express.Router();


// Posts "/api/posts/" API for=:-
router.post("/",
  authMiddleware,
  upload.single("image"),
  createPostController
)


// router exported:-
module.exports = router;
