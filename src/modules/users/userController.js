const register = (req, res) => {
	const user = { email: 'UserTest', password: 'Test123', company: 'Test' };
	res.json({ status: true, data: user });
	//registerUseCase.register(req.body)
};

module.exports = {
	register,
};
