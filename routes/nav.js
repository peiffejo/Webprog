var express = require('express');
var router = express.Router();


// Array for the Products

let products = [{
  name: "Coca Cola",
  img: 3,
  amount: 5,
  MHD: 30/02/2022,
}];
router.get('/', function(req, res, next) {
  res.render('listProducts', { products: products });
  });

router.get('/list', function (req, res) {
  res.render('listProducts', { products: products });
});

router.get('/create', function (req, res) {
  res.render('createProduct', { products: products });
});
  
module.exports = router;