const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardDebitSchema = new Schema({
	idClient: String,
	cardType: String,
	numberCard: Number,
	numberSecurity: Number,
	dateActivation: String,
	dateExpiration: String,
	nip: Number,
	balance: String,
});

module.exports = mongoose.model('CardDebit', cardDebitSchema);
