const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/index');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err)=> {
      if(err.name === 'ValidationError'){
        return res.status(400).render('registrations/index',{message: err.toString()});
      }
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
