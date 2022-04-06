const router = require('express').Router();

router.post('/register', (req, res) => {
	res.json({ module: 'users' });
});

module.exports = router;
