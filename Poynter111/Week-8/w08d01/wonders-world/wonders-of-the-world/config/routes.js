const router = require('express').Router();

const wonders = require('../controllers/wonders');

router.route('/wonders')
  .get(wonders.index)
  .post(wonders.create);
router.route('/wonders/:id')
  .get(wonders.show)
  .put(wonders.update)
  .delete(wonders.delete);

module.exports = router;
