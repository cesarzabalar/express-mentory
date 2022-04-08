const router = require('express').Router();
const { register } = require('./userController');
const { authMiddleware, generateToken } = require('../../middlewares/auth');
const registerRequest = require('./requestValidators/registerRequest');
const getTokenRequest = require('./requestValidators/getTokenRequest');

router.post('/getToken', getTokenRequest, generateToken);

// Protected routes
router.use(authMiddleware);

/**
 * swagger: docs/register-doc.js
 */
router.post('/register', registerRequest, register);

module.exports = router;
