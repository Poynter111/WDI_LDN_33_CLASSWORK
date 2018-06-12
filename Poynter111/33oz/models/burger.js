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

const burgerSchema = new mongoose.Schema({
  name: { type: String, required: 'This feild is required'},
  restaurant: { type: String, required: 'This feild is required'},
  address: { type: String, required: 'This feild is required'},
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  suitableFor: [{
    type: String, enum: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free',
      'kosher', 'halal']
  }],
  price: { type: Number, min: 1, max: 3, required: 'This feild is required'},
  description: String,
  image: { type: String, required: 'This feild is required'},
  comments: [ commentSchema ]
});

burgerSchema.virtual('avgRating')
  .get(function(){
    return Math.round(this.comments.reduce((sum, comment) => sum + comment.rating, 0) / this.comments.length);
  });

burgerSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Burger', burgerSchema);
