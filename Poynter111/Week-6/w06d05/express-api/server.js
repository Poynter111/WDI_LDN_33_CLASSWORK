const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const app           = express();
const { PORT, db }  = require('./config/environment');
const routes        = require('./config/router');

mongoose.Promise = require('bluebird');
mongoose.connect(db);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => console.log('Server is up and running on Port ' + PORT ));
