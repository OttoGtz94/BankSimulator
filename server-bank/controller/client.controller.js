const Client = require('../model/client.model');

exports.newClient = async (req, res, next) => {
	const client = new Client(req.body);
	try {
		await client.save();
		res.json(client);
	} catch (error) {
		console.log(`Error to save client`, error);
		next();
	}
};
