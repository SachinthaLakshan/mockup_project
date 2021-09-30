const mongoose = require('mongoose');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModel');

//register

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please fill all feilds' });
    } else if (password.length < 4) {
      return res
        .status(400)
        .json({ msg: 'Password must be least 4 characters' });
    }
    const user = await userSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists!' });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const newUser = await new userSchema({
      name,
      email,
      password: passwordHashed,
    });
    newUser.save();
    res.json(newUser);
    res.json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
  }
});

//login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ msg: 'Please enter email' });
  } else if (!password) {
    return res.status(400).json({ msg: 'Please enter password' });
  }

  const user = await userSchema.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ msg: 'User does not exist , please go to register' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ msg: 'Incorrect password' });
  }

  const payload = { id: user._id, name: user.name };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
      id: user._id,
    },
  });
});

module.exports = router;
