const { PORT } = require('./config');
const database = require('./infraestructure/data/mongodb/MongoDB');
const app = require('./server');

const start = async () => {
	try {
		await database.getConnect();
		app.listen(PORT, () => console.log(`running https://localhost:${PORT}`));
	} catch (err) {
		console.error(err.message);
	}
};

start();
