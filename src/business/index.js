'use strict';

module.exports = ({ Driver, Vehicle, config, errorUtil }) => {
	const driverBusiness = require('./driverBusiness')({
		Driver,
		Vehicle,
		config,
		errorUtil,
	});
	const vehicleBusiness = require('./vehicleBusiness')({
		Vehicle,
		config,
		errorUtil,
	});
	return { driverBusiness, vehicleBusiness };
};
