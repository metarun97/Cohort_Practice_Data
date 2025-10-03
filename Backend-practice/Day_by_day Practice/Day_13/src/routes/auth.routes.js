const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

//* Register user API by POST method:-

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token', token);

  res.status(201).json({
    message: 'User registered successfully',
    user,
    token,
  });
});

//* Login user API by POST method:-

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: "Username isn't available it's invalid!",
    });
  }

  const passwordExist = password == user.password;

  if (!passwordExist) {
    return res.status(401).json({
      message: 'Invalid password try again!',
    });
  }

  res.status(200).json({
    message: 'User loggedIn successfully',
  });
});

//* user API by GET method:-

router.get('/user', async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({
      message: 'Unautherized!',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });
    res.status(200).json({
      message: 'User fetched successfully!',
      user,
    });
    // res.send(decoded);
  } catch (error) {
    return res.status(401).json({
      message: 'Unautherized Invalid-token!',
    });
  }
});

module.exports = router;
