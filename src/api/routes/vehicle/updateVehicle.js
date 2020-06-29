'use strict';

module.exports = ({
	router,
	config,
	registerController,
	validateSchema,
	schemas,
}) => {
	const { endpoints } = config;
	const { updateVehicleSchema } = schemas;

	router.put(
		`${endpoints.vehicleUpdate.uri}/:vehicleId`,
		validateSchema(updateVehicleSchema).validate,
		registerController.updateVehicle
	);
	return router;
};
