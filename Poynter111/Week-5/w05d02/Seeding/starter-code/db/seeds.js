const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURI);

const Trainer = require('../models/trainer');
const Computer = require('../models/computer');

Trainer.collection.drop();
Computer.collection.drop();

Trainer.create([{
  brand: 'Nike',
  model: 'Air Force 1',
  colors: ['black', 'blue', 'green', 'orange', 'pink', 'teal', 'mauve'],
  rrp: 89.99
},{
  brand: 'Adidas',
  model: 'Campus',
  colors: ['blue', 'red', 'orange', 'pink', 'olive', 'grey'],
  rrp: 69.99
}], (err, trainers) => {
  if(err) console.log(err);
  if(trainers) console.log(`${trainers.length} trainers created!`);

  mongoose.connection.close();
});

Computer.create([{
  brand: 'Apple',
  model: 'MacBook Air',
  ram: 8,
  processor: '1.7 GHz Intel Core i7',
  capacity: 250,
  rrp: 999.99
}], (err, computers) => {
  if(err) console.log(err);
  if(computers) console.log(`${computers.length} computers created!`);

  mongoose.connection.close();
});
