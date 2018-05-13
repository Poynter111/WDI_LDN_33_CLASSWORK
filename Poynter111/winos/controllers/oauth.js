const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function github(req, res, next,){

  rp({
    method: 'POST',
    url: 'https://github.com/login/oauth/access_token',
    body: {
      client_id: req.body.clientId,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: req.body.code,
      redirect_uri: req.body.redirectUri
    },
    json: true
  })
    .then(response => {
      // GET https://api.github.com/user?access_token=...
      return rp({
        method: 'GET',
        url: 'https://api.github.com/user',
        qs: {
          access_token: response.access_token
        },
        headers: {
          'User-Agent': 'Winos'
        },
        json: true
      });
    })
    .then(response => {
      return User.findOne({ $or: [
        { email: response.email },
        { githubId: response.id }
      ] })
        .then(user => {
          if(!user){
            user = new User({
              username: response.login,
              email: response.email
            });
          }
          user.githubId = response.id;
          return user.save();
        });
    })
    .then(user => {
      const token = jwt.sign({ sub: user._id}, secret, { expiresIn: '6h'});
      res.json({
        message: `Welcome Back ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  github
};
