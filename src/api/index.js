'use strict'
module.exports = ({ express, config, bodyParser, controller, joi }) => {
	const { validateSchema } = require('./middlewares/validateSchema');

	const app = express()
	const schemas = require('./schemas')({ joi });
	const routes = require('./routes')({
		express,
		schemas,
		config,
		validateSchema,
		controller,
		joi,
	});

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(routes);

	return app;
};
