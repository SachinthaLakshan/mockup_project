const mongoose = require('mongoose');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModel');

//register

router.post('/register', async (req, res) => {
  try {
    const { isAdmin, name, email, password } = req.body;

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
    const time = Date.now();
    const newUser = await new userSchema({
      isAdmin,
      joinedTime: time,
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
      isAdmin: user.isAdmin,
      name: user.name,
      email: user.email,
      id: user._id,
    },
  });
});

//get all users
router.get('/user/get', async (req, res) => {
  const users = await userSchema.find().populate('_id');
  if (users) {
    res.send(users);
  } else {
    return res.status(400).json({ msg: 'Users not loading' });
  }
});
//update employee
router.put('/user/update/:id', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ msg: 'Please fill user name & email' });
    }
    const user = await userSchema.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.userName = req.body.userName || user.userName;
      user.address = req.body.address || user.address;
      user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      es.status(400).send({ message: 'User Not Found' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
