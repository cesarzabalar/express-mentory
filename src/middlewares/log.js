module.exports = (req, res, next) => {
	const { url, method } = req;
	console.log(`URI: ${url}, METHOD: ${method}`);
	//console.log(req.headers);
	next();
};

//module.exports = log;
