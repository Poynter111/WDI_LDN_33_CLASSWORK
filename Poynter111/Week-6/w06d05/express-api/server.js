const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const app           = express();
const { PORT, db }  = require('./config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log('Server is up and running on Port ' + PORT ));
