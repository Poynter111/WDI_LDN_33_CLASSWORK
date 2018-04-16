const express  = require("express");
const router   = express.Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in');
      res.redirect('/')
    });
  }
  return next();
}


router.route('/')
  .get(static.index);


  router.route('/private')
    .get(secureRoute, static.private);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

  router.route('/logout')
    .get(sessions.delete);

module.exports = router;
