const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const session         = require('express-session');
const flash           = require('express-flash');
const app             = express();
const routes          = require('./config/routes');
const { port, dbURI } = require('./config/environment');
const User            = require('./models/user');
mongoose.connect(dbURI);

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssshhh its a secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then((user) => {
      req.session.userId = user._id;
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });

});

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
