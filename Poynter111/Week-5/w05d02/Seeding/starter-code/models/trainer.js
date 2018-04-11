const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  colors: [{ type: String }],
  rrp: { type: Number, required: true }
});

module.exports = mongoose.model('Trainer', trainerSchema);