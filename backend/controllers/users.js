const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/user");

const { JWT_SECRET = "dev-secret" } = process.env;

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).send({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).send({
        message: "Invalid email or password",
      });
    }

    const matchedUser = await bcrypt.compare(
      password,
      user.password
    );

    if (!matchedUser) {
      return res.status(401).send({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },

      JWT_SECRET,

      {
        expiresIn: "7d",
      }
    );

    res.send({
      token,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.send({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
};