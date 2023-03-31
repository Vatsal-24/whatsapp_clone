const User = require("../models/userModel");

exports.addNewUser = async (req, res) => {
  try {
    let user = await User.findOne({ sub: req.body.sub });
    if (user) {
      res.status(200).json({
        message: "User already exists!",
      });
      return;
    }
    let newUser = await User.create(req.body);
    res.status(200).json({
      user: newUser,
      message: "New user created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Error creating new user",
      error: err,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json({
      user: users,
      message: "All users fetched",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Users fetched failed",
      error: err,
    });
  }
};
