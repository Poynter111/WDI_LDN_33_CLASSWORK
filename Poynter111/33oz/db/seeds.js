const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Burger = require('../models/burger');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Burger.create([{
    name: 'Holy Smokes',
    restaurant: 'Burger Priest',
    price: 1,
    address: '3397 Yonge St. Toronto, ON, Canada M4N 2M7',
    location: {
      lat: 43.6666944,
      lng: -79.3155959
    },
    description: 'Double Cheeseburger Topped With Smoke Panko Crusted Deep Fried Jalapenos',
    image: 'https://www.theburgerspriest.com/wp-content/uploads/2012/10/BP-web-11.jpg'
  }, {
    name: 'California',
    restaurant: 'Honest Burger',
    address: 'Widegate St, London E1 7HP, UK',
    location: {
      lat: 51.518159,
      lng: -0.078075
    },
    price: 2,
    description: 'Mustard-fried beef, bacon, American cheese, burger sauce, onion, tomato, pickle and lettuce with rosemary salted chips',
    image: 'https://www.honestburgers.co.uk/wp-content/uploads/2018/04/california-page.jpg'
  }, {
    name: 'Auburger',
    restaurant: 'The Vurger Co',
    address: '9, Avant Garde Richmix Square, Cygnet St, London E1',
    location: {
      lat: 51.5240377,
      lng: -0.0727817
    },
    suitableFor: ['vegetarian', 'vegan', 'dairy-free'],
    price: 2,
    description: 'Aubergine, caramelised red onion and Tabasco Chipotle chickpea patty with pickled red cabbage, gherkins, cheese and our house cumin mayo.',
    image: 'https://static1.squarespace.com/static/5794c448bebafb2f11804d9e/t/5a1204d871c10ba553380f93/1511130360834/theAUBURGER.jpg?format=750w'
  }, {
    name: 'Bacon Burger',
    restaurant: 'Five Guys',
    address: '9/11 Villiers St.Charing Cross London WC2N 6NA',
    location: {
      lat: 51.508217,
      lng: -0.123829},
    price: 3,
    description: 'regular two-patty burger, layered with four pieces of crispy, sweet apple-wood smoked bacon.',
    image: 'https://c1.staticflickr.com/8/7154/6711547597_6649b8ed97_b.jpg'
  }])
    .then(burgers => console.log(`${burgers.length} burgers created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
