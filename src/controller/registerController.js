/* eslint-disable prettier/prettier */
'use strict';

module.exports = ({ driverBusiness, vehicleBusiness }) => {
	return {
		createDriver: async (req, res) => {
			const driver = req.body;
			try {
				const result = await driverBusiness.createDriver(driver);
				res.status(200).send(result);
			} catch (err) {
				return res.status(400).send({ error: 'Driver already exists' });
			}
		},
		deleteDriver: async (req, res) => {
			const driverId = req.params.driverId;
			const result = await driverBusiness.deleteDriver(driverId);
			res.status(200).send(result);
		},
		getAllDrivers: async (req, res) => {
			const result = await driverBusiness.getAll();
			res.status(200).send(result);
		},
		updateDriver: async (req, res) => {
			const payload = req.body;
			const driverId = req.params.driverId;
			const result = await driverBusiness.updateDriver(driverId, payload);
			res.status(200).send(result);
		},

		createVehicle: async (req, res) => {
			const vehicle = req.body;
			try {
				const result = await vehicleBusiness.createVehicle(vehicle);
				res.status(200).send(result);
			} catch (err) {
				return res.status(400).send({ error: 'Vehicle already exists' });
			}
		},
		deleteVehicle: async (req, res) => {
			const vehicleId = req.params.vehicleId;
			const result = await vehicleBusiness.deleteVehicle(vehicleId);
			res.status(200).send(result);
		},
		getAllVehicles: async (req, res) => {
			const result = await vehicleBusiness.getAll();
			res.status(200).send(result);
		},
		updateVehicle: async (req, res) => {
			const payload = req.body;
			const vehicleId = req.params.vehicleId;
			const result = await vehicleBusiness.updateVehicle(vehicleId, payload);
			res.status(200).send(result);
		},
		createInputVehicle: async (req, res) => {
			const payload = req.body;
			const driverId = req.params.driverId;
			const result = await driverBusiness.createInputVehicle(driverId, payload);
			res.status(200).send(result);

		}
	};
};
