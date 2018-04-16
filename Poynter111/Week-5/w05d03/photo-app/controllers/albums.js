const Album = require('../models/album');

function albumsIndex(req, res){
  Album
    .find()
    .populate('user')
    .exec()
    .then(album => {
      res.render('albums/index', {album});
    });
}

function albumsShow(req, res){
  Album
    .findById(req.params.id)
    .populate('photos')
    .exec()
    .then(album => res.render('albums/show', {album}));
}

function albumsNew(req, res){
  res.render('albums/new', {error: null});
}

function albumsCreate(req, res){
  req.body.user = req.currentUser;
  Album
    .create(req.body)
    .then(() => res.redirect('/albums'))
    .catch((error) => {
      if(error.name === 'ValidationError'){
        return res.badRequest('/albums/new', error.toString());
      }
    });
}

function albumsEdit(req, res){
  Album
    .findById(req.params.id)
    .populate('photos')
    .exec()
    .then(album => res.render('albums/edit', {album}));
}

function albumsUpdate(req, res){
  Album
    .findById(req.params.id)
    .exec()
    .then(album => {
      album = Object.assign(album, req.body);
      return album.save();
    })
    .then(album => res.redirect(`/albums/${album._id}`));
}

function albumsDelete(req, res){
  Album
    .findById(req.params.id)
    .exec()
    .then(album => album.remove())
    .then(() => res.redirect('/albums'));
}
module.exports = {
  index: albumsIndex,
  show: albumsShow,
  delete: albumsDelete,
  new: albumsNew,
  create: albumsCreate,
  edit: albumsEdit,
  update: albumsUpdate
};
