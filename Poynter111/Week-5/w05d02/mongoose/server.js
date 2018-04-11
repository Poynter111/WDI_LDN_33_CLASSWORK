const mongoose = require('mongoose');
const databaseURI = 'mongod://localhost/mongoose-intro';
const User = require('./models/user');


mongoose.connect(databaseURI);

const alex = new User({
  firstName: 'Alex',
  lastName: 'Poynter',
  dob: new Date('1991-06-30'),
  email: 'alex.poynter'
});

alex.save((error, user) =>{
  if(error) return console.log(error);
  return console.log(`User was created! ${user}`);
});


User.find((err, users) => {
  if (err) return console.log(err);
  return console.log(users);
});


User.findOneAndUpdate({firstName: 'Alex'},{lastName: 'Poynter'},(err, user) =>{
  if (err) return console.log(err);
  return console.log(user);
});
console.log(alex);
