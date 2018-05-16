const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
  name: String,
  restaurant: String,
  address: String,
  location: {
    lat: Number,
    lng: Number
  },
  suitableFor: [{
    type: String, enum: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free',
      'kosher', 'halal']
  }],
  price: { type: Number, min: 1, max: 3},
  description: String,
  image: String
});

module.exports = mongoose.model('Burger', burgerSchema);
