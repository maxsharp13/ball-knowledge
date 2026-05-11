const router = require("express").Router();

const auth = require("../middlewares/auth");

const {
  getPlays,
  createPlay,
} = require("../controllers/plays");

router.get("/plays", getPlays);

router.post("/plays", auth, createPlay);

module.exports = router;