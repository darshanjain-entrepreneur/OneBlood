const userModel = require("../models/userModel");

const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedpassword;

    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in registering api",
      error,
    });
  }
};

module.exports = { registerController };
