var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/users_controller');

/* GET users listing. */
// router.get('/users/:userId', function (req, res) {
//   // Access userId via: req.params.userId

//   res.send('respond with a resource');
// });

router.post('/create', function (req, res) {
  //Create new user
  //req.body.name
  user_controller.sign_up({
    'last_name': req.body.last_name,
    'first_name': req.body.first_name,
    'mail': req.body.mail,
    'password': req.body.password,
    'address': req.body.address
  });

  res.render('index', { title: 'Express' });
  //res.send('respond with a resource');
});

router.post('/signin', function (req, res) {
  //Sign in
  ok = user_controller.sign_in({
    'mail': req.body.mail,
    'password': req.body.password
  });

  ok.then((data)=>{
    console.log(data)
    console.log("ok")
    // localStorage.setItem("connected", true);
    // make second request to get all products
    res.render('index', { connected: true });
  }).catch((data)=>{
    console.log(data)
    console.log("nok")
    res.render('signin', { error: 'Invalid username/password' })
  })

});

router.get('/signin', function (req, res) {
  res.render('signin');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

module.exports = router;
