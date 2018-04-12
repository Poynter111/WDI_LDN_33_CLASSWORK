const mongoose = require('mongoose');
const photo = require('./photo');

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  year: Date,
  photos: [{type: mongoose.Schema.ObjectId, ref: 'Photo'}],
  rating: {type: Number, min: 1, max: 5, default: 3}
});

module.exports = mongoose.model('Album', albumSchema);
