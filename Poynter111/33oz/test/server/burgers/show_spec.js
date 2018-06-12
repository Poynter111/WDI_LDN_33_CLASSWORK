/* global api, describe, it, expect, beforeEach */

const Burger = require('../../../models/burger');

const burgerData = {
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
};

let burgerId;

describe('GET /burgers/:id', () => {
  beforeEach(done => {
    Burger.remove({})
      .then(() => Burger.create(burgerData))
      .then(burger => {
        burgerId = burger._id;
      })
      .then(() => done());
  });

  it('Should return a 200 response', done =>{
    api
      .get(`/api/burgers/${burgerId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('Should return an Object as response body', done => {
    api
      .get(`/api/burgers/${burgerId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should return an array of valid burger Objects', done => {
    api
      .get(`/api/burgers/${burgerId}`)
      .end((err, res) => {
        Object.keys(burgerData).forEach(field => {
          expect(res.body[field]).to.deep.eq(burgerData[field]);
        });
        done();
      });
  });










//END OF DESCRIBE
});
