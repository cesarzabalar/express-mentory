const register = (req, res) => {
	const body = req.body;
	res.json({ status: true, data: body });
};

module.exports = {
	register,
};
