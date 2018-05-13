const Wine = require('../models/wine');

function winesIndex(req, res, next){
  Wine
    .find()
    .exec()
    .then(wines => res.json(wines))
    .catch(next);
}

function winesShow(req, res, next){
  Wine
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(wine => {
      if(!wine) return res.sendStatus(404);
      res.json(wine);
    })
    .catch(next);
}

function winesCreate(req, res, next){
  req.body.createdBy = req.currentUser;
  Wine
    .create(req.body)
    .then((wine) => res.status(201).json(wine))
    .catch(next);
}

function winesUpdate(req, res, next){
  Wine
    .findById(req.params.id)
    .exec()
    .then(wine => {
      if(!wine) return res.sendStatus(404);
      return Object.assign(wine, req.body);
    })
    .then(wine => wine.save())
    .then((wine) => res.json(wine))
    .catch(next);
}

function winesDelete(req, res, next){
  Wine
    .findById(req.params.id)
    .exec()
    .then(wine => {
      if(!wine) return res.sendStatus(404);
      return wine.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

function winesCommentCreate(req, res, next){
  req.body.createdBy = req.currentUser;
  Wine.findById(req.params.id)
    .exec()
    .then(wine => {
      wine.comments.push(req.body);
      return wine.save();
    })
    .then(wine => res.json(wine))
    .catch(next);
}
function winesCommentDelete(req, res, next){
  Wine.findById(req.params.id)
    .exec()
    .then(wine => {
      const comment = wine.comments.id(req.params.commentId);
      if(!comment.createdBy.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      comment.remove();
      return wine.save();
    })
    .then(wine => res.json(wine))
    .catch(next);
}

module.exports = {
  index: winesIndex,
  show: winesShow,
  create: winesCreate,
  update: winesUpdate,
  delete: winesDelete,
  commentCreate: winesCommentCreate,
  commentDelete: winesCommentDelete
};
