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
		ownerName: joi.string().alphanum(),
		renavamNumber: joi.string().alphanum(),
		plateLicense: joi.number().min(7).max(7),
	});

	return updateDriverSchema;
};
