const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  dob: Date,
  website: String,
  address: String,
  country: String
},{
  timestamps: true
});

userSchema.statics.all = function(callback)
  return this.find({}, callback);



userSchema.methods.fullName = function(){
  return `${this.firstName} ${this.lastName}`;
};

module.exports = mongoose.model('User', userSchema);
