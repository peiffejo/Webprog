var express = require('express');
var router = express.Router();


// Array for the Products
const today = new Date();



let products = [{
  ID: 1,
  name: "Coca Cola",
  img: 'https://as2.ftcdn.net/v2/jpg/01/83/31/03/500_F_183310393_A7hcmA9HKSLnym7VUPwhgmByrcvxJRoK.jpg',
  amount: 5,
  MHD: Math.round((new Date(2021, 10, 20).getTime() -today.getTime())/(1000*60*60*24)),
},
{
  ID: 2,
  name: "Mango",
  img: 'https://www.publicdomainpictures.net/pictures/170000/velka/mango-14606845838Oe.jpg',
  amount: 10,
  MHD: Math.round((new Date(2021, 4, 20).getTime() -today.getTime())/(1000*60*60*24)),
},
{
  ID: 3,
  name: "Kiwi",
  img: 'https://www.publicdomainpictures.net/pictures/70000/velka/kiwi-fruit-1389439824dsq.jpg',
  amount: 5,
  MHD: Math.round((new Date(2022, 6, 23).getTime() -today.getTime())/(1000*60*60*24)),
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