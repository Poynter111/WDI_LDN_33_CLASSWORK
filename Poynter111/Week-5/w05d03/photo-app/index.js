const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const {port, databaseURI} = require('./config/environment');
const routes = require('./config/routes');

mongoose.connect(databaseURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(routes);

app.listen(port, () => console.log(`Running on port${port}`));
