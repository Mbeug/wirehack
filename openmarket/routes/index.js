var express = require('express');
var router = express.Router();
var requests_controller = require('../controllers/requests_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  var requests = requests_controller.get_all_requests();
  requests.then(function(data){ console.log(data); res.render('index',{ 'products': data.RowDataPacket }); }).catch(function(err){console.log(err)});
});

module.exports = router;
