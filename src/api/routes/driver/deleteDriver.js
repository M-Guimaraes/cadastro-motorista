'use strict';

module.exports = ({
	router,
	config,
	registerController,
	validateSchema,
	schemas,
}) => {
	const { endpoints } = config;
	const { deleteDriverSchema } = schemas;

	router.delete(
		`${endpoints.driverDelete.uri}/:driverId`,
		validateSchema(deleteDriverSchema).validate,
		registerController.deleteDriver
	);

	return router;
};
