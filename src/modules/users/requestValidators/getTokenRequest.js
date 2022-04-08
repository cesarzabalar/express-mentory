const Joi = require('@hapi/joi');

const schemaGetToken = Joi.object({
	email: Joi.string().min(6).max(200).required().email(),
});

const getTokenRequest = (req, res, next) => {
	const { error } = schemaGetToken.validate(req.body);
	if (error) return res.status(401).json({ status: false, error: error.details });
	next();
};

module.exports = getTokenRequest;
