const musicModel = require("../models/music.model");
const { uploadFile } = require('../services/storage.service');
const albumModel = require("../models/album.model");

/**
 @name uploadMusic
 @description create a music accepts uri,title,artist
 @access private
 */
const uploadMusic = async (req, res) => {

 try {

  const artist = req.user.id;
  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
   uri: result.url,
   title,
   artist
  })

  res.status(201).json({
   message: "Music uploaded Successfully!",
   music,

  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in create a music!",
  })
 }
}


/**
 @name createAlbum
 @description create a album accepts artist,title,musicId
 @access private
 */
const createAlbum = async (req, res) => {
 try {

  const artist = req.user.id;
  const { title, musics } = req.body;

  const album = await albumModel.create({
   artist,
   title,
   musics,
  })


  res.status(201).json({
   message: "Album created Successfully!",
   album: {
    id: album._id,
    title: album.title,
    artist: album.artist,
    musics: album.musics,
   }
  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in creating album!",
  })
 }
}

module.exports = { uploadMusic, createAlbum };
