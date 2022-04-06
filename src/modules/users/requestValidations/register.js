const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
	email: Joi.string().min(6).max(255).required().email(),
	password: Joi.string().min(6).max(1024).required(),
	company: Joi.string().min(6).max(255).required(),
});

const registerRequest = (req, res, next) => {
	const { error } = schemaRegister.validate(req.body);
	if (error) return res.status(400).json({ status: false, error: error.details });
	next();
};

module.exports = registerRequest;
