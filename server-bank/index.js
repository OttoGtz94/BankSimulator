console.log('Simulador Bancario!!');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectionDB = require('./config/db');
const routes = require('./routes');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5500;

/* Database conection */
mongoose.Promise = global.Promise;

connectionDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes());

app.listen(PORT, '0.0.0.0', () =>
	console.log(`Server Running on the port: ${PORT}`),
);
