/* global api, describe, it, expect, beforeEach */

const Burger = require('../../../models/burger');

const burgerData = [{
  name: 'Hey Pesto',
  restaurant: 'GBK',
  price: 2,
  address: 'covent garden',
  location: {
    lat: 35.922725,
    lng: -121.088713
  },
  description: 'Tasty',
  image: 'https://www.danmurphys.com.au/media/DM/Product/308x385/133732_0_9999_med_v1_m56577569855226907.png'
}, {
  name: 'Taxi',
  restaurant: 'GBK',
  price: 2,
  address: 'covent garden',
  location: {
    lat: 35.922725,
    lng: -121.088713
  },
  description: 'Tasty very',
  image: 'https://www.danmurphys.com.au/media/DM/Product/308x385/133732_0_9999_med_v1_m56577569855226907.png'
}];

describe('GET /burgers', () => {
  beforeEach(done => {
    Burger.remove({})
      .then(() => Burger.create(burgerData))
      .then(() => done());
  });

  it('Should return a 200 response', done =>{
    api
      .get('/api/burgers')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('Should return an array as response body', done => {
    api
      .get('/api/burgers')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('Should return an array of valid Burger Objects', done => {
    api
      .get('/api/burgers')
      .end((err, res) => {
        res.body.forEach((burger, index) => {
          Object.keys(burgerData[index]).forEach(field => {
            expect(burger[field]).to.deep.eq(burgerData[index][field]);
          });
        });
        done();
      });
  });
});
