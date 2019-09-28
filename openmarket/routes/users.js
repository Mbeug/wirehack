var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user');

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

router.post('/users', function (req, res) {
  //Sign in
  user_controller.sign_in({
    'email': req.body.email,
    'password': req.body.password
  });

  res.render('index', { title: 'Express' });
  //res.send('respond with a resource');
});

module.exports = router;
