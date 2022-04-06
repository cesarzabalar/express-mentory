const express = require('express'); //COMMONJS CJS
const middlewareNotFound = require('./middlewares/notFound');
const middlewareError = require('./middlewares/error');
const log = require('./middlewares/log');
const morgan = require('morgan');
const { generateToken, authMiddleware } = require('./middlewares/authMiddleware');
const app = express();

//const usersRouter = require('./modules/users/usersRouter');
const appRoutes = require('./modules/routes');

// App Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :host :url :status :param[cedula] :body :res[content-length] - :response-time ms - :date'));
morgan.token('host', function (req) {
	return req.hostname;
});
morgan.token('param', function (req, res, param) {
	return req.params[param];
});

morgan.token('body', (req) => JSON.stringify(req.body));

const apiRoutes = express.Router();

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

// generate token
app.post('/token', generateToken);

//modules routes
appRoutes.forEach((route) => {
	const [path] = Object.keys(route);
	apiRoutes.use(`/${path}`, route[path]);
});

// API global prefix route
app.use('/v1/api', apiRoutes);

app.use(middlewareNotFound);
app.use(middlewareError);

app.listen(3500, () => {
	console.log('server is running');
});
