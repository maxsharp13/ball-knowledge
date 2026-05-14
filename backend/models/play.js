const mongoose = require("mongoose");

const playSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  difficulty: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  example: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("play", playSchema);