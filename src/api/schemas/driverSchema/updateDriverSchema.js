'use strict';
module.exports = ({ joi }) => {
	const updateDriverSchema = joi.object({
		params: {
			type: 'object',
			required: ['driverId'],
			properties: {
				driverId: { type: 'string' },
			},
		},
		driverName: joi.string().alphanum(),
		lastName: joi.string().alphanum(),
		cpf: joi.number().min(11).max(11),
		birthDay: joi.number().min(6).max(8),
	});

	return updateDriverSchema;
};
