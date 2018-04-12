const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {

}

module.exports = {
  new: newRoute,
  create: createRoute
};
