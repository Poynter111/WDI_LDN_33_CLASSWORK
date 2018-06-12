const router = require('express').Router();
const burgers = require('../controllers/burgers');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/burgers')
  .get(burgers.index)
  .post(secureRoute, burgers.create);

router.route('/burgers/:id')
  .get(burgers.show)
  .put(secureRoute, burgers.update)
  .delete(secureRoute, burgers.delete);

router.post('/burgers/:id/comments', secureRoute, burgers.commentCreate);
router.delete('/burgers/:id/comments/:commentId', secureRoute, burgers.commentDelete);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
