const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardCreditSchema = new Schema({
	idClient: String,
	cardType: String,
	numberCard: Number,
	numberSecurity: Number,
	dateActivation: String,
	dateExpiration: String,
	nip: Number,
	creditLimit: String,
	creditUse: String,
});

module.exports = mongoose.model('CardCredit', cardCreditSchema);
