const Shoe = require('../models/shoe');

function shoesCreate(req, res){
  Shoe
    .create(req.body)
    .then((shoe) => res.status(201).json(shoe))//201 is there for dev's
    .catch((err) => console.log(err));
}

module.exports = {
  create: shoesCreate
};
