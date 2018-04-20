const Shoe = require('../models/shoe');

function shoesIndex(req, res){
  Shoe
    .find()
    .exec()
    .then((shoes) => res.status(200).json(shoes))
    .catch((err) => console.log(err));
}

function shoesCreate(req, res){
  Shoe
    .create(req.body)
    .then((shoe) => res.status(201).json(shoe))//201 is there for dev's
    .catch((err) => console.log(err));
}

function shoesShow(req, res){
  Shoe
    .findById(req.params.id)
    .exec()
    .then((shoe) => res.json(shoe))
    .catch((err) => console.log(err));
}

function shoesUpdate(req, res){
  Shoe
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((shoe) => res.status(200).json(shoe))
    .catch((err) => console.log(err));
}

function shoesDelete(req, res){
  Shoe
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch((err) => console.log(err));
}

module.exports = {
  create: shoesCreate,
  show: shoesShow,
  index: shoesIndex,
  update: shoesUpdate,
  delete: shoesDelete
};
