const { authMiddleware } = require('../../middlewares/authMiddleware');
const registerRequest = require('./requestValidations/register');
const { register } = require('./usersController');

const router = require('express').Router();

router.use(authMiddleware);

router.post('/register', registerRequest, register);

module.exports = router;
