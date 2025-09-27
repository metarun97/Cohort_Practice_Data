const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

// * Register API:-
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: 'User registered successfully!',
    user,
  });
});

// * LoggedIn API:-

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: 'Username not found [Invald username]',
    });
  }

  const isPasswordExist = password == user.password;

  if (!isPasswordExist) {
    return res.status(401).json({
      message: 'Invalid password!',
    });
  }

  res.status(200).json({
    message: 'User loggedIn successfully!',
  });
});

module.exports = router;
