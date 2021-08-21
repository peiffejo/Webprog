var express = require('express');
var router = express.Router();


// Array for the Products
const today = new Date();
const MHD = new Date(2021, 7, 20);

//get Pic
var getData = function () {
  return 'https://www.publicdomainpictures.net/pictures/210000/t2/beach-chairs-and-sea-1488302392D7r.jpg';
}

let products = [{
  ID: 1,
  name: "Coca Cola",
  img: 'https://www.w3schools.com/images/w3schools_green.jpg',
  amount: 5,
  today: today.getTime(),
  MHD: Math.round((MHD.getTime() -today.getTime())/(1000*60*60*24)),
}];

router.get('/', function(req, res, next) {
  
  res.render('listProducts', { products: products} );
  });

router.get('/list', function (req, res) {
  res.render('listProducts', { products: products });
});

router.get('/create', function (req, res) {
  res.render('createProduct', { products: products });

});
  
module.exports = router;