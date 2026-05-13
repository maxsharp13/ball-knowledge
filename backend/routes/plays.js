const router = require("express").Router();

const { getPlays, createPlay, deletePlay } = require("../controllers/plays");

router.get("/", getPlays);
router.post("/", createPlay);
router.delete("/:id", deletePlay);

module.exports = router;