'use strict';

module.exports = () => {
	const mongoose = require('../database/index')();
	const vehicleSchema = new mongoose.Schema({
		ownerName: {
			type: String,
			require: true,
		},
		renavamNumber: {
			type: Number,
			require: true,
			unique: true,
		},
		plateLicense: {
			type: String,
			require: true,
			unique: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
		}
	});
	vehicleSchema.pre('save', function (next) {
		this.updatedAt = Date.now();
		next();
	});

	const Vehicle = mongoose.model('Vehicle', vehicleSchema);
	return Vehicle;
};
