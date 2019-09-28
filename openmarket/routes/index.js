var express = require('express');
var router = express.Router();
var requests_controller = require('../controllers/requests_controller');
var moment = require('moment');

/* GET home page. */
router.get('/',  function(req, res, next) {
  var requests = requests_controller.get_all_requests();
  requests.then(function(data){ 
    //console.log("done",data);
    data.forEach(element => {
      element.peremption_date = moment(element.peremption_date).format('Do MMMM YYYY');
    });
    res.render('index',{
       products: data
      }); 
    }).catch(function(err){
      console.log("error",err)
    });
});
router.get('/about', function(req, res, next) {
  res.render('about',{});
});
router.get('/contact', function(req, res, next) {
  res.render('contact',{});
});
module.exports = router;
