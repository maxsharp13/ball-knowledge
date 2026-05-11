const Play = require("../models/play");

const getPlays = async (req, res) => {
  try {
    const plays = await Play.find({});

    res.send(plays);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const createPlay = async (req, res) => {
  try {
    const {
      title,
      category,
      difficulty,
      description,
      example,
      image,
    } = req.body;

    const play = await Play.create({
      title,
      category,
      difficulty,
      description,
      example,
      image,
      owner: req.user._id,
    });

    res.status(201).send(play);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  getPlays,
  createPlay,
};