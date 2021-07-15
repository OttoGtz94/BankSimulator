const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
	user: String,
	password: String,
	avatar: String,
	dateRegister: String,
	dateDischarge: String,
	active: Boolean,
	informationPerson: {
		name: String,
		lastname: String,
		address: {
			street: String,
			number: Number,
			suburb: String,
			townHall: String,
			cp: Number,
			city: String,
			country: String,
		},
		phones: {
			local: [String],
			mobile: [String],
			office: [String],
		},
		dateBirth: String,
	},
	cards: {
		credit: {
			idCreditCard: String,
			cardType: String,
			numberCard: Number,
			numberSecurity: Number,
			dateActivation: String,
			dateExpiration: String,
			nip: Number,
			creditLimit: String,
			creditUse: String,
		},
		debit: {
			idDebitCard: String,
			cardType: String,
			numberCard: Number,
			numberSecurity: Number,
			dateActivation: String,
			dateExpiration: String,
			nip: Number,
			balance: String,
		},
	},
});

module.exports = mongoose.model('Client', clientSchema);
