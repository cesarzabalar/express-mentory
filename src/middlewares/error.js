const error = (err, req, res, next) => {
	const errorCode = err.status || 500;
	res.status(errorCode).send({
		status: errorCode,
		message: err.message || 'Internal server error',
	});
};

module.exports = error;
