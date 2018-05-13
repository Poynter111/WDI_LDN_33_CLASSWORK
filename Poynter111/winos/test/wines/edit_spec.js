/* global api, describe, it, expect, beforeEach */
const jwt = require('jsonwebtoken');
const Wine = require('../../models/wine');
const User = require('../../models/user');
const { secret } = require('../../config/environment');


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

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let wineId;
let token;

describe('PUT /wines/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Wine.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => Wine.create(wineData))
      .then((wine) => {
        wineId = wine._id;
      })
      .then(() => done());
  });

  it('Should return a 401 response without token', done => {
    api
      .put(`/api/wines/${wineId}`)
      .send(wineData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });


});
