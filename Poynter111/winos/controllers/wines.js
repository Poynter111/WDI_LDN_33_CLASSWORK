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
    .exec()
    .then(wine => {
      if(!wine) return res.sendStatus(404);
      res.json(wine);
    })
    .catch(next);
}

function winesCreate(req, res, next){
  Wine
    .create(req.body)
    .then((wine) => res.status(201).json(wine))
    .catch(next);
}

function winesUpdate(req, res, next){
  Wine
    .findById(req.params.id)
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
    .then(wine => {
      if(!wine) return res.sendStatus(404);
      return wine.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: winesIndex,
  show: winesShow,
  create: winesCreate,
  update: winesUpdate,
  delete: winesDelete
};
