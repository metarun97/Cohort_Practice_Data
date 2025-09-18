const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/songs', upload.single('audio'), async (req, res) => {
  console.log(req.body);
  const fileData = await uploadFile(req.file);
  console.log(fileData);
  console.log(req.file);
  return res.status(201).json({
    message: 'Song created successfully',
    song: req.body,
  });
});

module.exports = router;
