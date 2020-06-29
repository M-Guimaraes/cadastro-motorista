'use strict';

module.exports = ({
	router,
	config,
	registerController,
	validateSchema,
	schemas,
}) => {
	const { endpoints } = config;
	const { updateDriverSchema } = schemas;

	router.put(
		`${endpoints.driverUpdate.uri}/:driverId`,
		validateSchema(updateDriverSchema).validate,
		registerController.updateDriver
	);
	return router;
};
