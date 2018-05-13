const express = require('express');
const app     = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./config/router');

const { port, dbURI } = require('./config/environment');
const errorHandler = require('./lib/errorHandler');

mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', router);

//Error Catcher  :)

app.use(errorHandler);

app.listen(4000, () => console.log(`We're up and running on port ${port}`));

module.exports = app;
