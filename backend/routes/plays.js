const router = require('express').Router();
const { validatePlayBody, validateId } = require('../middlewares/validation');
const { getPlays, createPlay, deletePlay } = require('../controllers/plays');

router.get('/', getPlays);
router.post('/', validatePlayBody, createPlay);
router.delete('/:id', validateId, deletePlay);

module.exports = router;