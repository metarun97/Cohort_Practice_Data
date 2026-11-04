const express = require("express");
const musicController = require("../controllers/music.controller");
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require("multer");


/* Configure multer for file upload */
const upload = multer({ multer: multer.memoryStorage() });

/* Router created */
const router = express.Router();

/**
 @route /api/music/create
 @description create a music
 @access private
 */
router.post("/upload", upload.single("music"), authMiddleware.authArtist, musicController.uploadMusic);


/**
 @route /api/music/album
 @description create a music album
 @access private
 */
router.post('/album', authMiddleware.authArtist, musicController.createAlbum);

module.exports = router;
