'use strict';
module.exports = ({ config, registerController, router }) => {
	const { endpoints } = config;
	router.get(`${endpoints.vehicles.uri}`, registerController.getAllVehicles);

	return router;
};
