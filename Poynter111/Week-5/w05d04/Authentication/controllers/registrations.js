const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res){

}

module.exports = {
  new: newRoute,
  create: createRoute
};
