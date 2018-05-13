/* global api, describe, it, expect, beforeEach */

const Wine = require('../../models/wine');

const wineData = [{
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

}];

describe('GET /wines', () => {
  beforeEach(done => {
    Wine.remove({})
      .then(() => Wine.create(wineData))
      .then(() => done());
  });

  it('Should return a 200 response', done =>{
    api
      .get('/api/wines')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('Should return an array as response body', done => {
    api
      .get('/api/wines')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('Should return an array of valid wine Objects', done => {
    api
      .get('/api/wines')
      .end((err, res) => {
        res.body
          .sort((a,b) => a.country > b.country)
          .forEach((wine, index) => {
            Object.keys(wineData[index]).forEach(field => {
              expect(wine[field]).to.deep.eq(wineData[index][field]);
            });
          });
        done();
      });
  });
});
