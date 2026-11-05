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


/**
 @name getAllMusics
 @description get all musics of artist
 @access private
 */
const getAllMusics = async (req, res) => {
 try {

  const musics = await musicModel.find()
   .limit()
   .skip(1)
   .populate("artist", "username email");

  res.status(200).json({
   message: "Musics fetched Successfully!",
   musics,
  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in get all musics!",
  })
 }
}


/**
 @name getAllAlbums
 @description get all albums of artist
 @access private
 */
const getAllAlbums = async (req, res) => {
 try {

  const albums = await albumModel.find().select("title artist").populate("artist", "username email");

  res.status(200).json({
   message: "Albums fetched Successfully!",
   albums,
  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in get all albums!",
  })
 }
}


/**
 @name getAlbumById
 @description get a perticuler album
 @access private
 */
const getAlbumById = async (req, res) => {
 try {

  const albumId = req.params.albumId;

  const album = await albumModel.findById(albumId).populate("artist", "username email");

  res.status(200).json({
   message: "Album fetched Successfully!",
   album,
  })

 } catch (error) {
  console.error(error);

  res.status(500).json({
   message: "Internal server error in get a album!",
  })
 }
}
module.exports = { uploadMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById };
