'use strict';

module.exports = ({
	express,
	config,
	controller,
	validateSchema,
	schemas,
	joi,
}) => {
	const router = express.Router();
  const { registerController } = controller;
  
	require('./driver/inputVehicle')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});
  require('./driver/createDriver')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});
	require('./driver/getAllDrivers')({ 
		router, 
		config, 
		registerController 
	});
	require('./driver/deleteDriver')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});
	require('./driver/updateDriver')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});

	require('./vehicle/createVehicle')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});
	require('./vehicle/getAllVehicles')({ 
		router, 
		config, 
		registerController 
	});
	require('./vehicle/deleteVehicle')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});
	require('./vehicle/updateVehicle')({
		router,
		config,
		registerController,
		validateSchema,
		schemas,
		joi,
	});

	return router;
};
