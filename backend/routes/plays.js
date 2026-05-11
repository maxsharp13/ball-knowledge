const router = require("express").Router();

const auth = require("../middlewares/auth");

const {
  getPlays,
  createPlay,
  deletePlay,
} = require("../controllers/plays");

router.get("/plays", getPlays);

router.post("/plays", auth, createPlay);

router.delete("/plays/:id", auth, deletePlay);

module.exports = router;