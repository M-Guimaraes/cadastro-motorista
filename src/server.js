'use strict';
const validator = require('cpf-cnpj-validator');
const errorUtil = require('./utils/error');
const config = require('./config');
const joi = require('@hapi/joi').extend(require('@hapi/joi-date'))
const express = require('express');
const bodyParser = require('body-parser');
const Driver = require('./models/driver')();
const Vehicle = require('./models/vehicle')();
const business = require('./business')({
	config,
	Driver,
	Vehicle,
	errorUtil,
});
const controller = require('./controller')({ business });
const schemas = require('./api/schemas')({ joi });

const app = require('./api')({
	express,
	config,
	bodyParser,
	controller,
	joi,
	schemas,
});
const { server } = config;

app.listen(server.serverPort, () => {
	console.log('Server rodando');
});
