/* global api, describe, it, expect, beforeEach */

const Wine = require('../../models/wine');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

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
let token;
describe('POST /wines', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Wine.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => done());
  });

  it('Should return a 401 response without token', done => {
    api
      .post('/api/wines')
      .send(wineData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('Should return a 201 response with a token', done => {
    api
      .post('/api/wines')
      .set('Authorization', `Bearer ${token}`)
      .send(wineData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });
  it('Should return a valid wine Object', done => {
    api
      .post('/api/wines')
      .set('Authorization', `Bearer ${token}`)
      .send(wineData)
      .end((err, res) =>{
        expect(res.body._id).to.be.a('string');
        Object.keys(wineData).forEach(feild => {
          expect(res.body[feild]).to.deep.eq(wineData[feild]);
        });
        done();
      });
  });
});
