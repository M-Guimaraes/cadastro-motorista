'use strict';

require('dotenv/config');

const baseUrl = {
	uri: '/api',
};

const {
	SERVER_PORT,
	SERVER_NAME,
	SERVER_HOST,
	DB_USER,
	DB_PASSWD,
	DB_HOST,
	DB_ENGINE,
	DB_NAME,
} = process.env;

module.exports = {
	server: {
		serverPort: SERVER_PORT,
		serverName: SERVER_NAME,
		serverHost: SERVER_HOST,
	},
	database: {
		username: DB_USER,
		password: DB_PASSWD,
		name: DB_NAME,
		host: DB_HOST,
		dialect: DB_ENGINE,
	},

	endpoints: {
		baseUrl: baseUrl.uri,
		inputVehicle: {
			uri: `${baseUrl.uri}/inputVehicle`,
		},
		driverCreate: {
			uri: `${baseUrl.uri}/driverCreate`,
		},
		driverDelete: {
			uri: `${baseUrl.uri}/driverDelete`,
		},
		drivers: {
			uri: `${baseUrl.uri}/drivers`,
		},
		driverUpdate: {
			uri: `${baseUrl.uri}/driverUpdate`,
		},
		vehicleCreate: {
			uri: `${baseUrl.uri}/vehicleCreate`,
		},
		vehicleDelete: {
			uri: `${baseUrl.uri}/vehicleDelete`,
		},
		vehicles: {
			uri: `${baseUrl.uri}/vehicles`,
		},
		vehicleUpdate: {
			uri: `${baseUrl.uri}/vehicleUpdate`,
		},
	},
};
