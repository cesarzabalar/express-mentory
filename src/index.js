require('dotenv').config();
const express = require('express'); //COMMONJS CJS
const middlewareNotFound = require('./middlewares/notFound');
const middlewareError = require('./middlewares/error');
//const log = require('./middlewares/log');
const { generateToken, authMiddleware } = require('./middlewares/auth');
const morgan = require('morgan');

const modulesRoutes = require('./modules/routes');
const app = express();

const apiRoutes = express.Router();

// App Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan(':date :url :method :status body: :body - :response-time ms'));
	morgan.token('body', (req) => JSON.stringify(req.body));
}

app.get('/', (req, res) => {
	const params = req.query;
	res.status(201).send({ name: 'cesar', role: 'dev', params });
});

app.get('/:cedula', (req, res) => {
	const { cedula } = req.params;
	res.status(201).send(cedula);
});

//app.use(log);

app.post('/', authMiddleware, (req, res) => {
	const body = req.body;
	res.json(body);
});

app.post('/error', () => {
	throw new Error('Endpoint error');
});

app.post('/getToken', generateToken);

modulesRoutes.forEach((route) => {
	const [routeName] = Object.keys(route);
	apiRoutes.use(`/${routeName}`, route[routeName]);
});

app.use('/v1/api', apiRoutes);

app.use(middlewareNotFound);
app.use(middlewareError);

app.listen(3500, () => {
	console.log('server is running');
});
