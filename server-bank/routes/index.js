const express = require('express');
const router = express.Router();
const { newClient } = require('../controller/client.controller');
const {
	newCardCredit,
} = require('../controller/cardCredit.controller');
const {
	newCardDebit,
} = require('../controller/cardDebit.controller');

module.exports = function () {
	router.post('/clients', newClient);
	router.post('/card-credit', newCardCredit);
	router.post('/card-debit', newCardDebit);

	return router;
};
