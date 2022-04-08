const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpecs = (port) => {
	const options = {
		definition: {
			openapi: '3.0.0',
			info: {
				title: 'Express API Mentory',
				version: '1.0.0',
				description: 'A simple Express Library API',
				contact: {
					name: 'Cesar A. Zabala',
					url: 'https://www.linkedin.com/in/cesarzabala/',
				},
			},
			servers: [
				{
					url: `http://localhost:${port}`,
				},
			],
		},
		apis: ['./src/modules/**/*.js'],
	};
	return swaggerJSDoc(options);
};

const swaggerOptions = {
	explorer: true,
};

module.exports = {
	swaggerSpecs,
	swaggerOptions,
};
