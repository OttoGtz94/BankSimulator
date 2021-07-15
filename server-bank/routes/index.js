const express = require('express');
const router = express.Router();
const { newClient } = require('../controller/client.controller');

module.exports = function () {
	router.post('/clients', newClient);

	return router;
};
