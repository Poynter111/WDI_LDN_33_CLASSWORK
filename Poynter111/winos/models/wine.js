const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({
  grape: { type: String, required: true },
  brand: { type: String, required: true },
  vintage: { type: Number, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Wine', wineSchema);
