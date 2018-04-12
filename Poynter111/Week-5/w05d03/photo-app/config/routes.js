const router = require('express').Router();
const albums = require('../controllers/albums');

router.get('/', (req,res) => res.render('home'));

router.route('/albums')
  .get(albums.index)
  .post(albums.create);

router.route('/albums/new')
  .get(albums.new);

router.route('/albums/:id')
  .get(albums.show)
  .delete(albums.delete)
  .put(albums.update);

router.route('/albums/:id/edit')
  .get(albums.edit);

router.route('/*').get((req, res) => {
  res.render('statics/404');
});


module.exports = router;
