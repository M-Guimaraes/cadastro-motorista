'use strict';

module.exports = ({
	router,
	config,
	registerController,
	validateSchema,
	schemas,
}) => {
	const { endpoints } = config;
	const { deleteVehicleSchema } = schemas;

	router.delete(
		`${endpoints.vehicleDelete.uri}/:vehicleId`,
		validateSchema(deleteVehicleSchema).validate,
		registerController.deleteVehicle
	);

	return router;
};
