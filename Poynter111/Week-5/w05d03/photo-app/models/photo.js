const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: String,
  comments: [{
    type: String
  }],
  album: {type: mongoose.Schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Photo', photoSchema);
