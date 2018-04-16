const express                 = require('express');
const app                     = express();
const bodyParser              = require('body-parser');
const methodOverride          = require('method-override');
const morgan                  = require('morgan');
const expressLayouts          = require('express-ejs-layouts');
const mongoose                = require('mongoose');
const flash                   = require('express-flash');
const session                 = require('express-session');
const {port, databaseURI}     = require('./config/environment');
const customResponses         = require('./lib/customResponses');
const routes                  = require('./config/routes');
const User                    = require('./models/user');

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

app.use(session({
  secret: 'My super secret token',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(customResponses);

app.use((req, res, next) =>{
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .then((user) =>{
      req.session.userId = user._id;
      res.locals.user = user;
      req.currentUser = user;
      res.locals.isLoggedIn = true;
      next();
    });


});

app.use(routes);

app.use((err, req, res, next) => {
  if(err){
    err.status = err.status || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.status);
    res.locals.err = err;
    return res.render(`statics/${err.status}`);
  }
  next();
});

app.listen(port, () => console.log(`Running on port${port}`));
