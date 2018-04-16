const router          = require('express').Router();
const albums          = require('../controllers/albums');
const registrations   = require('../controllers/registrations');
const sessions        = require('../controllers/sessions');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(() =>{
      req.flash('danger', 'You must be logged in');
      res.redirect('/');
    });
  }

  return next();
}

router.get('/', (req,res) => res.render('home'));

//------------------------------------------------resoure albums
router.route('/albums')
  .get(albums.index)
  .post(albums.create);

router.route('/albums/new')
  .get(secureRoute, albums.new);

router.route('/albums/:id')
  .get(albums.show)
  .delete(albums.delete)
  .put(albums.update);

router.route('/albums/:id/edit')
  .get(albums.edit);
//-------------------------------------------- END resource albums

//-----------------------------------------------Authentication
router.route('/signup')
  .get(registrations.new)
  .post(registrations.create);
router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);
router.route('/logout')
  .get(sessions.delete);
//-----------------------------------------------End Authentication
router.route('/*').get((req, res) => {
  res.render('statics/404');
});

module.exports = router;
