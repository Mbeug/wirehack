var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/users_controller');

/* GET users listing. */
// router.get('/users/:userId', function (req, res) {
//   // Access userId via: req.params.userId

//   res.send('respond with a resource');
// });

router.post('/users/create', function (req, res) {
  //Create new user
  //req.body.name
  user_controller.sign_up({
    'last_name': req.body.last_name,
    'first_name': req.body.first_name,
    'email': req.body.email,
    'password': req.body.password,
    'address': req.body.address
  });

  res.render('index', { title: 'Express' });
  //res.send('respond with a resource');
});

router.post('/users/signin', function (req, res) {
  //Sign in
  response = user_controller.sign_in({
    'email': req.body.email,
    'password': req.body.password
  });

  if (!response) {
    res.render('users/signin', { error: 'Invalid username/password' })
  } else {
    // make second request to get all products
    res.render('index', { title: 'Express' });
  }
  //res.send('respond with a resource');
});

router.get('/users/signin', function (req, res) {
  res.render('signin');
});

router.get('/users/signup', function (req, res) {
  res.render('signup');
});

module.exports = router;
