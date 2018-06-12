const mongoose = require('mongoose');
const moment = require('moment');
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

commentSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });
commentSchema.set('toJSON', {
  virtuals: true,
  transfrom(doc, json){
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

const wineSchema = new mongoose.Schema({
  grape: { type: String, required: true },
  brand: { type: String, required: true },
  vintage: { type: Number, required: true },
  region: { type: String, required: true },
  location: {
    lat: {type: Number, required: true },
    lng: {type: Number, required: true }
  },
  country: { type: String, required: true },
  image: { type: String, required: true },
  comments: [ commentSchema ]
});


wineSchema.virtual('avgRating')
  .get(function(){
    return this.comments.reduce((sum, comment) => sum + comment.rating, 0) / this.comments.length;
  });

wineSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Wine', wineSchema);
