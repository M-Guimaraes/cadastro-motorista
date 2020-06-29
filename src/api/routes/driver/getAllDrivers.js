'use strict';
module.exports = ({ config, registerController, router }) => {
	const { endpoints } = config;
	router.get(`${endpoints.drivers.uri}`, registerController.getAllDrivers);

	return router;
};
