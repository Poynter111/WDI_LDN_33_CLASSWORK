const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({
  grape: String,
  brand: String,
  vintage: Number,
  region: String,
  country: String,
  image: String
});

module.exports = mongoose.model('Wine', wineSchema);
