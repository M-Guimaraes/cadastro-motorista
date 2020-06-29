'use strict';

const { Document } = require('mongoose');
const { boolean } = require('@hapi/joi');

module.exports = () => {
	const mongoose = require('../database/index')();
	const driverSchema = new mongoose.Schema({
		driverName: {
			type: String,
			require: true,
		},
		lastName: {
			type: String,
			require: true,
		},
		birthDate: {
			type: Date,
		},
		cpf: {
			type: Number,
			require: true,
			unique: true,
		},
		vehiclesId: [
			{
				type: String,
			}			
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
		},
		active: {
			type: Boolean,
			default: true,
		},
	});
	driverSchema.pre('save', function (next) {
		this.updatedAt = Date.now();
		next();
	});

	const Driver = mongoose.model('Driver', driverSchema);
	return Driver;
};
