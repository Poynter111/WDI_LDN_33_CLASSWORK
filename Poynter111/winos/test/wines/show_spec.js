/* global api, describe, it, expect, beforeEach */

const Wine = require('../../models/wine');

const wineData = {
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
};

let wineId;

describe('GET /wines/:id', () => {
  beforeEach(done => {
    Wine.remove({})
      .then(() => Wine.create(wineData))
      .then(wine => {
        wineId = wine._id;
      })
      .then(() => done());
  });

  it('Should return a 200 response', done =>{
    api
      .get(`/api/wines/${wineId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('Should return an Object as response body', done => {
    api
      .get(`/api/wines/${wineId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should return an array of valid wine Objects', done => {
    api
      .get(`/api/wines/${wineId}`)
      .end((err, res) => {
        Object.keys(wineData).forEach(field => {
          expect(res.body[field]).to.deep.eq(wineData[field]);
        });
        done();
      });
  });










//END OF DESCRIBE
});
