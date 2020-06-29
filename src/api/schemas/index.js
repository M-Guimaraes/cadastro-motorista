'use strict';

module.exports = ({ joi }) => {
	const createDriverSchema = require('./driverSchema/createDriverSchema')({ joi	});
	const deleteDriverSchema = require('./driverSchema/deleteDriverSchema')({ joi });
	const updateDriverSchema = require('./driverSchema/updateDriverSchema')({	joi	});

	const createVehicleSchema = require('./vehicleSchema/createVehicleSchema')({ joi });
	const deleteVehicleSchema = require('./vehicleSchema/deleteVehicleSchema')({ joi });
	const updateVehicleSchema = require('./vehicleSchema/updateVehicleSchema')({ joi });

	return {
		createDriverSchema,
		deleteDriverSchema,
		updateDriverSchema,
		
		createVehicleSchema,
		deleteVehicleSchema,
		updateVehicleSchema
	};
};
