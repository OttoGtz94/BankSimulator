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
		credit: [],

		debit: [],
	},
});

module.exports = mongoose.model('Client', clientSchema);
