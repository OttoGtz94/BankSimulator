const CardDebit = require('../model/cardDebit.model');

exports.newCardDebit = async (req, res, next) => {
	const cardDebit = new CardDebit(req.body);
	try {
		await cardDebit.save();
		res.json(cardDebit);
	} catch (error) {
		console.log('Error to save debit card ', error);
		next();
	}
};
