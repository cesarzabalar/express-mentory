const serverless = require('serverless-http');
const database = require('./infraestructure/data/mongodb/MongoDB');
const app = require('./server');

const handler = serverless(app);
module.exports.handler = async (event, context) => {
	try {
		await database.getConnect();
		return await handler(event, context);
	} catch (err) {
		console.error(err.message);
	}
};
