const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  brand: { type: String, required: true},
  color: { type: String },
  laced: { type: Boolean },
  price: { type: Number }
}, {
  timestamps: true
});


module.exports = mongoose.model('shoe', shoeSchema);
