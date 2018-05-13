/* global api, describe, it, expect, beforeEach */
//seed database with a single user
//make a post request to /api/login with correctcredentials
//test for correct status code(200)
//test for a token
//test for a user object
//test for a message
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
//TEST DATA
const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let user;

describe('POST /login', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(_user => {
        user = _user;
        done();
      });
  });

  it('Should retrun a 200 response', done => {
    api
      .post('/api/login')
      .send(userData)
      .expect(200, done);
  });

  it('Should return a valid token', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        const payload = jwt.decode(res.body.token);
        expect(payload.sub).to.exist;
        expect(payload.sub).to.eq(user._id.toString());
        done();
      });
  });

  it('Should return 401 response if password is bad', done => {
    api
      .post('/api/login')
      .send({ email: 'test@test.com', password: 'bad' })
      .end((err, res) => {
        expect(res.status).to.eq(401);
        expect(res.body.message).to.eq('Unauthorized');
        done();
      });
  });

  it('Should return 401 respponse if email is bad', done => {
    api
      .post('/api/login')
      .send({ email: 'bad@test.com', password: 'test' })
      .end((err, res) => {
        expect(res.status).to.eq(401);
        expect(res.body.message).to.eq('Unauthorized');
        done();
      });
  });

});
