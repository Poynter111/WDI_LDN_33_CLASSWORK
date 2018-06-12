/* global api, describe, it, expect, beforeEach */
const jwt = require('jsonwebtoken');
const Burger = require('../../../models/burger');
const User = require('../../../models/user');
const { secret } = require('../../../config/environment');


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

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let burgerId;
let token;

describe('PUT /burgers/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Burger.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => Burger.create(burgerData))
      .then((burger) => {
        burgerId = burger._id;
      })
      .then(() => done());
  });

  it('Should return a 401 response without token', done => {
    api
      .put(`/api/burgers/${burgerId}`)
      .send(burgerData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/burgers/${burgerId}`)
      .set('Authorization', `Bearer ${token}` )
      .send(burgerData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});
