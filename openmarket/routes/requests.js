var express = require('express');
var router = express.Router();
var requests_controller = require('../controllers/requests_controller');

/* GET requests listing. */
router.get('/', function(req, res) {
  var requests = requests_controller.get_all_requests();
  res.render('index', { 'products': requests });
  //TODO select only useful cols
});

// router.get('/:id', function(req, res) {
  // var request = requests_controller.get_one_requests(req.params.id);
  //res.render
// });

router.get('/product', function(req, res) {
  console.log("ICI");
  res.render('create_product');
});


router.post('/create', function(req, res) {
  //(request_id, name, peremption_date, customer_id, price, type_id)
  requests_controller.create_request({
    'name': req.body.name,
    'peremption_date': req.body.peremption_date,
    'customer_id': req.body.customer_id,
    'price': req.body.price,
    'type_id': req.body.type_id,
    'description': req.body.description
  });
  res.redirect('/');
});


module.exports = router;
