'use strict';

module.exports = ({ Vehicle, errorUtil }) => {
	return {
		createVehicle: async vehicle => {
			const newVehicle = await Vehicle.create(vehicle);
			return newVehicle;
		},
		deleteVehicle: async vehicleId => {
			const vehicle = await Vehicle.findOne({
				_id: vehicleId,
			});
			if (!vehicle) return errorUtil.notFound('Vehicle not found');

			await vehicle.delete();
			return { message: 'Vehicle excluded' };
		},
		getAll: async (req, res) => {
			const vehicles = await Vehicle.find().populate(['vehicles']);

			if (!vehicles)
				return res.status(400).send({ error: 'Vehicle not found' });
			return vehicles;
		},
		updateVehicle: async (vehicleId, payload) => {
			const vehicle = await Vehicle.findOne({
				_id: vehicleId,
			});

			if (!vehicle) return errorUtil.notFound('Vehicle not found');

			Object.keys(payload).forEach(key => {
				vehicle[key] = payload[key];
			});

			await vehicle.save();
			return { message: 'Vehicle updated' };
		},
	};
};
