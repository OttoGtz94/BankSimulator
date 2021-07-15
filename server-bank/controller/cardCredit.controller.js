const CardCredit = require('../model/cardCredit.model');

exports.newCardCredit = async (req, res, next) => {
	const cardCredit = new CardCredit(req.body);
	try {
		await cardCredit.save();
		res.json(cardCredit);
	} catch (error) {
		console.log('Error to save credit card', error);
		next();
	}
};
