console.log('Simulador Bancario!!');
const express = require('express');
const mongoose = require('mongoose');
const connectionDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5500;

/* Database conection */
mongoose.Promise = global.Promise;

connectionDB();

app.listen(PORT, '0.0.0.0', () =>
	console.log(`Server Running on the port: ${PORT}`),
);
