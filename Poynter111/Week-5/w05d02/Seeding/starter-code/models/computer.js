const mongoose = require('mongoose');

const computerSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  ram: { type: Number },
  processor: { type: String },
  capacity: { type: Number },
  rrp: { type: Number, required: true }
});

module.exports = mongoose.model('Computer', computerSchema);