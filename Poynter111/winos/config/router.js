const router = require('express').Router();
const wines = require('../controllers/wines');
const auth = require('../controllers/auth');
const darksky = require('../controllers/darksky');
// const stats = require('../controllers/stats');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');


router.route('/wines')
  .get(wines.index)
  .post(secureRoute, wines.create);

router.route('/wines/:id')
  .get(wines.show)
  .put(secureRoute, wines.update)
  .delete(secureRoute, wines.delete);

router.post('/wines/:id/comments', secureRoute, wines.commentCreate);
router.delete('/wines/:id/comments/:commentId', secureRoute, wines.commentDelete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.get('/forecast', darksky.forecast);


router.post('/github', oauth.github);

module.exports = router;
