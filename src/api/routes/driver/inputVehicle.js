'use strict';

module.exports = ({
	config,
	router,
	registerController,
}) => {
	const { endpoints } = config;

	router.post(
		`${endpoints.inputVehicle.uri}/:driverId`,
		registerController.createInputVehicle
	);

	return router;
};
