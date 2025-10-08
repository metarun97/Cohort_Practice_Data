const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

//* Register user API:-
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const userExists = await userModel.findOne({
    username,
  });

  if (userExists) {
    return res.status(409).json({
      message: 'Username already in use!',
    });
  }

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token', token);

  res.status(201).json({
    message: 'user registered successfully!',
    user,
  });
});

//* Fetch User data API:-
router.get('/user', async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized token not found!',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decoded.id,
    });
    return res.status(201).json({
      mesage: 'User fetched successfully!',
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: 'Unautherized invalid token',
    });
  }
});

//* Logged in user API:-

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(404).json({
      message: 'User account not found!',
    });
  }

  const isPasswordValid = user.password === password;
  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid password!',
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie('token', token);

  res.status(200).json({
    message: 'User logged in successfully!',
    user,
  });
});

module.exports = router;
