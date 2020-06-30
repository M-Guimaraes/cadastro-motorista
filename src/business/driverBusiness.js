'use strict';

module.exports = ({ Driver, errorUtil }) => {
	return {
		createDriver: async driver => {
			const newDriver = await Driver.create(driver);
			return newDriver;
		},
		deleteDriver: async driverId => {
			const driver = await Driver.findOne({
				_id: driverId,
			});
			if (!driver) return errorUtil.notFound('Driver not found');

			await driver.delete();
			return { message: 'Driver excluded' };
		},
		getAll: async (req, res) => {
			const drivers = await Driver.find().populate(['drivers']);

			if (!drivers) return res.status(400).send({ error: 'Driver not found' });
			return drivers;
		},
		updateDriver: async (driverId, payload) => {
			const driver = await Driver.findOne({
				_id: driverId,
			});

			if (!driver) return errorUtil.notFound('Driver not found');

			Object.keys(payload).forEach(key => {
				driver[key] = payload[key];
			});

			await driver.save();
			return { message: 'Driver updated' };
		},
		createInputVehicle: async (driverId, payload) => {
			const vehicle = payload.vehiclesId;
			const driver = await Driver.findOne({
				_id: driverId,
			});
			const vehicles = driver.vehiclesId
			await vehicles.push(vehicle);
			
			await driver.save();
			return { message: 'Vehicle included' };

		},
	};
};
