const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan         = require('morgan');
const app            = express();
const port           = process.env.PORT || 3000;
const mongoose       = require('mongoose');


const Trainer = require('./models/trainer');
const Computer = require('./models/computer');

const databaseURL = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURL);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/trainers', (req, res) => {
  Trainer.find({}, (err, trainers)=>{
    if (err) return console.log(err);
    res.render('trainers', {trainers});
  });
});

app.get('/computers', (req, res) => {
  Computer.find({}, (err, computers)=>{
    if (err) return console.log(err);
    // console.log(trainers);
    res.render('computers', {computers});
  });
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port, () => console.log(`Express is alive on port ${port}`));
