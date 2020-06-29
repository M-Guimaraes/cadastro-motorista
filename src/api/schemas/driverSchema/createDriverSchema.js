'use strict';

module.exports = ({ joi }) => {

	const createDriverSchema = joi.object({
		driverName: joi.string().alphanum().required(),
		lastName: joi.string().alphanum().required(),
		birthDate: joi.date().format('YYYY-MM-DD').utc(),
		cpf: joi.required(),
	});

	return createDriverSchema;
};
