'use strict';

module.exports = ({
	validateSchema,
	config,
	router,
	registerController,
	schemas,
}) => {
	const { endpoints } = config;
	const { createVehicleSchema } = schemas;

	router.post(
		`${endpoints.vehicleCreate.uri}`,
		validateSchema(createVehicleSchema).validate,
		registerController.createVehicle
	);

	return router;
};
