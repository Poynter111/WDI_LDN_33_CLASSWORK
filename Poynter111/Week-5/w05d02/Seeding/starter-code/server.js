const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURI);

const Trainer = require('./models/trainer');

Trainer.find((err, trainers) => {
  if(err) return console.log(err);
  console.log(trainers);
});