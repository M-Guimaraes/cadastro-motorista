'use strict';

module.exports = ({ business }) => {
	const registerController = require('./registerController');

	return {
		registerController: registerController(business),
	};
};
