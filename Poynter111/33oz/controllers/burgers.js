//-----------------------------------------------------------------------IMPORTS
const Burger = require('../models/burger');
//-----------------------------------------------------------------INDEX BURGERS
function indexBurgers(req, res, next){
  Burger
    .find()
    .exec()
    .then(burgers => res.json(burgers))
    .catch(next);
}
//----------------------------------------------------------------CREATE BURGERS
function createBurgers(req, res, next){
  Burger
    .create(req.body)
    .then((burger) => {
      res.status(201).json(burger);
    })
    .catch(next);
}
//------------------------------------------------------------------SHOW BURGERS
function showBurger(req, res, next){
  Burger
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(burger => {
      if(!burger) return res.sendStatus(404);
      res.json(burger);
    })
    .catch(next);
}
//----------------------------------------------------------------UPDATE BURGERS
function updateBurger(req, res, next){
  Burger
    .findById(req.params.id)
    .exec()
    .then(burger => {
      if(!burger) return res.sendStatus(404);
      return Object.assign(burger, req.body);
    })
    .then(burger => burger.save())
    .then((burger) => res.json(burger))
    .catch(next);
}
//----------------------------------------------------------------DELETE BURGERS
function deleteBurger(req, res, next){
  Burger
    .findById(req.params.id)
    .exec()
    .then(burger => {
      if(!burger) return res.sendStatus(404);
      return burger.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}
//---------------------------------------------------------------Create Comments
function burgersCommentCreate(req, res, next){
  req.body.createdBy = req.currentUser;
  Burger
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(burger => {
      burger.comments.push(req.body);
      return burger.save();
    })
    .then(burger => res.json(burger))
    .catch(next);
}
//----------------------------------------------------------------Delete Comments
function burgersCommentDelete(req, res, next){
  Burger.findById(req.params.id)
    .exec()
    .then(burger => {
      const comment = burger.comments.id(req.params.commentId);
      if(!comment.createdBy._id.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
      comment.remove();
      return burger.save();
    })
    .then(burger => res.json(burger))
    .catch(next);
}
//----------------------------------------------------------------EXPORT MODULES
module.exports = {
  index: indexBurgers,
  create: createBurgers,
  show: showBurger,
  update: updateBurger,
  delete: deleteBurger,
  commentCreate: burgersCommentCreate,
  commentDelete: burgersCommentDelete
};
