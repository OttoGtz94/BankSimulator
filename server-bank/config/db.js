const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_MONGO_DEV, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log('MongoDB Connect');
	} catch (error) {
		console.log('There was a mistake', error);
		process.exit(1);
	}
};

module.exports = connectDB;
