var express = require('express');
var router = express.Router();
var requests_controller = require('../controllers/requests_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  var requests = requests_controller.get_all_requests();
  console.log(requests);
  res.render('index',{ 'products': requests });
});

module.exports = router;
