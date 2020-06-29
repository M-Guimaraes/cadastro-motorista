'user strict';
module.exports = ({ joi }) => {
	const deleteDriverSchema = joi.object({
		params: {
			type: 'object',
			required: ['driverId'],
			properties: {
				driverId: { type: 'string' },
			},
		},
	});

	return deleteDriverSchema;
};
