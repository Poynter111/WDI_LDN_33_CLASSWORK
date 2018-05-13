const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Wine = require('../models/wine');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Wine.create([{
    grape: 'Pinot Gris',
    brand: 'Juliet',
    vintage: 2017,
    region: 'South Eastern Australia',
    location: {
      lat: 35.922725,
      lng: -121.088713
    },
    country: 'Australia',
    image: 'https://www.danmurphys.com.au/media/DM/Product/308x385/133732_0_9999_med_v1_m56577569855226907.png'
  }, {
    grape: 'Merlot',
    brand: 'Garmence Saint-Emilion Grand Cru',
    vintage: 2010,
    region: 'Bordeaux',
    location: {
      lat: -44.836151,
      lng: -0.580816
    },
    country: 'France',
    image: 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/11/07/16/saint-emilion-france.jpg'
  }, {
    grape: 'Sauvignon Blanc',
    brand: 'Brancott Estate',
    vintage: 2017,
    region: 'Marlborough',
    location: {
      lat: 30.0002,
      lng: -136.2092
    },
    country: 'New Zealand',
    image: 'https://d1rknyb5tfws60.cloudfront.net/images/merchandising/content/wines/brancott-estate-sauvignon-blanc-37083/mediumCutout.jpg'
  }, {
    grape: 'Chardonnay',
    brand: 'Fog Head',
    vintage: 2013,
    region: 'Californian - Monterey County',
    location: {
      lat: 35.922725,
      lng: -121.088713
    },
    country: 'USA',
    image: 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/05/13/12/fog-head.jpg'
  }])
    .then(wines => console.log(`${wines.length} wines created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
