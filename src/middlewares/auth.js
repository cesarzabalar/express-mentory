const { APP_KEY, AUTH_EMAIL } = require('../config');
const jwt = require('jsonwebtoken');

const generateToken = (req, res, next) => {
	const { email } = req.body;

	if (email !== AUTH_EMAIL) return next(new Error('Email invalid'));

	const token = jwt.sign({ email }, APP_KEY);
	res.json({ status: 200, token });
};

const authMiddleware = (req, res, next) => {
	const { authorization } = req.headers;
	console.log(authorization);
	next();
};

module.exports = {
	generateToken,
	authMiddleware,
};
