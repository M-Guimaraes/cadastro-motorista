'use strict';

module.exports = ({
	validateSchema,
	config,
	router,
	registerController,
	schemas,
}) => {
	const { endpoints } = config;
	const { createDriverSchema } = schemas;

	router.post(
		`${endpoints.driverCreate.uri}`,
		validateSchema(createDriverSchema).validate,
		registerController.createDriver
	);

	router.post(
		`${endpoints.inputVehicle.uri}:vehicleId`,
		registerController.createInputVehicle
	);

	return router;
};
