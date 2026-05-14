const router = require('express').Router();
const auth = require('../middlewares/auth');
const { validateUserBody, validateLogin } = require('../middlewares/validation');
const { createUser, login, getCurrentUser } = require('../controllers/users');

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateLogin, login);
router.get('/users/me', auth, getCurrentUser);

module.exports = router;