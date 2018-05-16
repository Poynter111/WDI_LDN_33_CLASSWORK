const router = require('express').Router();
const burgers = require('../controllers/burgers');

router.route('/burgers')
  .get(burgers.index)
  .post(burgers.create);

router.route('/burgers/:id')
  .get(burgers.show)
  .put(burgers.update)
  .delete(burgers.delete);

module.exports = router;
