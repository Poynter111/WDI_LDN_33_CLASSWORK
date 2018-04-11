const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');


const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);

const Album = require('../models/album');
const Photo = require('../models/photo');

Album.collection.drop();
Photo.collection.drop();


Photo.create([{
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
  comments: [
    'amazing view',
    'Tallest in the world from 1931 to 1970',
    'NY is dope'
  ]
},{
  url: 'https://static01.nyt.com/images/2017/02/12/travel/12HOURS1/12HOURS1-master1050.jpg',
  comments: [
    'amazing view',
    'blah blah',
  ]
},{
  url: 'http://www.toeuropeandbeyond.com/wp-content/uploads/2012/10/things-to-do-in-the-west-village-4.jpg',
  comments: [
    'West village',
    'manhattan',
    'NY is dope'
  ]
}])

.then((photos) => {
  return Album.create({
    name: 'Holidays in NYC',
    location: 'New York City',
    year: new Date(2015, 07, 15),
    photos: photos.map(photo => photo._id)
  })
})
.then(photos => console.log(`${photos.length} created`))



.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())
