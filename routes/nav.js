var express = require('express');
var router = express.Router();


// Array for the Products
const today = new Date();


function MHD(DateFromMHD){
  if(DateFromMHD >= 0){
      return "Your food lifetime has " + DateFromMHD + " days left";     
  }
      return "Your food lifetime has " + Math.abs(DateFromMHD) + " days left";
    //  return "The food MHD date is over since " + Math.abs(DateFromMHD) + " days" ;
      }
let CocaCola = new Date(2021, 7, 20);
let Mango = new Date(2021, 4, 20);
let Kiwi = new Date(2022, 6, 23);

let products = [{
  ID: 1,
  name: "Coca Cola",
  img: 'https://as2.ftcdn.net/v2/jpg/01/83/31/03/500_F_183310393_A7hcmA9HKSLnym7VUPwhgmByrcvxJRoK.jpg',
  amount: 5,
  MHD: MHD(Math.round((CocaCola.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [CocaCola.getDate(), CocaCola.getMonth(), CocaCola.getFullYear()]
},
{
  ID: 2,
  name: "Mango",
  img: 'https://www.publicdomainpictures.net/pictures/170000/velka/mango-14606845838Oe.jpg',
  amount: 10,
  MHD: MHD(Math.round((Mango.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [Mango.getDate(), Mango.getMonth(), Mango.getFullYear()],
},
{
  ID: 3,
  name: "Kiwi",
  img: 'https://www.publicdomainpictures.net/pictures/70000/velka/kiwi-fruit-1389439824dsq.jpg',
  amount: 5,
  MHD: MHD(Math.round((Kiwi.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [Kiwi.getDate(), Kiwi.getMonth(), Kiwi.getFullYear()]
}];

router.get('/', function(req, res, next) {
  res.render('listProducts', { products: products} );
  });

//zeigt einzelenes Produkt
  router.get('/singleProduct/:id', function (req, res) {
    const ID = products.find(c => c.ID === parseInt(req.params.id));
    res.render('singleProduct', { ID });
});

//Zeigt alle Produkte
router.get('/list', function (req, res) {
  res.render('listProducts', { products: products });
});

//zeigt die Seite zum editieren 
router.get('/edit/:id', function (req, res) {
  const ID = products.find(c => c.ID === parseInt(req.params.id));
  res.render('editProduct', { ID });
});

router.get('/create', function (req, res) {
  res.render('createProduct', { products: products });
});

//löscht bestimmtes Produkt
router.delete('/delete/:postID', function (req, res, next) {
  let post = products.find(p => p.ID === parseInt(req.params.postID));
  if (!post) {
      res.status(404).send('Post not found');
  }
  let index = products.indexOf(post);
  products.splice(index, 1);
  res.send(products);
});

//
router.put('/plusOne/:postID', function (req, res, next) {
  let post = products.find(p => p.ID === parseInt(req.params.postID));
  if (!post) {
      res.status(404).send('Post not found');
  }
  post.amount = req.body.amount;
  res.send(products);
});
  
module.exports = router;