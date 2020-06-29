'use strict';

module.exports = ({ joi }) => {
	const createVehicleSchema = joi.object({
		ownerName: joi.string().alphanum().required(),
		renavamNumber: joi.number().required(),
		plateLicense: joi.string().min(7).max(7).required(),
	});

	return createVehicleSchema;
};
