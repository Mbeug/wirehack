var express = require('express');
var router = express.Router();
var requests_controller = require('../controllers/requests_controller');

/* GET shop*/
router.get('/', function(req, res, next) {
  var requests = requests_controller.get_all_requests();
  requests.then(function(data){ console.log(data); res.render('shop',{ 'products': data }); }).catch(function(err){console.log(err)});
});

module.exports = router;
