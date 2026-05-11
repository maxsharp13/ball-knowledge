const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

    const matchedUser = await bcrypt.compare(password, user.password);

    if (!matchedUser) {
      return res.status(401).send({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { _id: user._id },
      "super-secret-key",
      { expiresIn: "7d" }
    );

    res.send({ token });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  createUser,
  login,
};