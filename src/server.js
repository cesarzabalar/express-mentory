const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = require('./config');

// Custom middlewares
const middlewareNotFound = require('./middlewares/notFound');
const middlewareError = require('./middlewares/error');

//Swagger
const SwaggerUI = require('swagger-ui-express');
const { swaggerSpecs, swaggerOptions } = require('./docs/swagger');

const modulesRoutes = require('./modules/routes');
const app = express();
const apiRoutes = express.Router();

// App Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', SwaggerUI.serve, SwaggerUI.setup(swaggerSpecs(PORT), swaggerOptions));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan(':date :url :method :status body: :body - :response-time ms'));
	morgan.token('body', (req) => JSON.stringify(req.body));
}

// Dynamic routes
modulesRoutes.forEach((route) => {
	const [routeName] = Object.keys(route);
	apiRoutes.use(`/${routeName}`, route[routeName]);
});

app.use('/v1/api', apiRoutes);

app.use(middlewareNotFound);
app.use(middlewareError);

module.exports = app;
