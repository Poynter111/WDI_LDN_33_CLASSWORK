const Wonder = require('../models/wonder');

function wondersIndex(req, res) {
  Wonder
    .find()
    .exec()
    .then(wonders => res.status(200).json(wonders))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function wondersCreate(req, res) {
  Wonder
    .create(req.body)
    .then(wonder => res.status(201).json(wonder))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function wondersShow(req, res) {
  Wonder
    .findById(req.params.id)
    .exec()
    .then(wonder => {
      if(!wonder) return res.status(401).json({ message: 'No wonder found'});
      res.json(wonder);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function wondersUpdate(req, res) {
  Wonder
    .findById(req.params.id)
    .then(wonder => {
      if(!wonder) return res.status(401).json({ message: 'No wonder found'});

      for(const field in req.body) {
        wonder[field] = req.body[field];
      }

      return wonder.save();
    })
    .then(wonder => res.json(wonder))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function wondersDelete(req, res) {
  Wonder
    .findById(req.params.id)
    .then(wonder => {
      if(!wonder) return res.status(401).json({ message: 'No wonder found'});
      return wonder.remove();
    })
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

module.exports = {
  index: wondersIndex,
  create: wondersCreate,
  show: wondersShow,
  update: wondersUpdate,
  delete: wondersDelete
};
