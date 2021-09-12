var express = require('express');
var router = express.Router();

//CocaCola Daten
var XMLHttpRequest = require('xhr2');
let requestXML = new XMLHttpRequest();
let requestURL = 'https://world.openfoodfacts.org/api/v0/product/[5449000017888].json';
requestXML.open('GET', requestURL);
requestXML.responseType = 'text';
requestXML.send();
let CocaColaData;
let nutriCocaCola;
let test = [];
requestXML.onload = function () {
var superText = requestXML.response;
CocaColaData = JSON.parse(superText);
getSuper(CocaColaData);
}

function getSuper(jsonObj) {
const ingr = jsonObj['product']['ingredients'];
const nutri = jsonObj['product']['nutriments'];
nutriCocaCola ="Brennwert: "+ nutri.energy + " " +  "kcal || " + "Kohlenhydrate: "+nutri.carbohydrates + " " + nutri.carbohydrates_unit + " || " + "Fett: "+ nutri.fat + " " +  nutri.fat_unit + " || "+ " " + "Eiweiß: " + nutri.proteins  + nutri.proteins_unit+ " || " + "Salz: " + nutri.salt + " " + nutri.salt_unit + " || " + "Zucker " +  nutri.sugars + " " +nutri.sugars_unit;
  let i =0 ;   
while(ingr[i] != undefined){
      test += ingr[i].text +" || ";
      i++; 
    };
}

//Snickers Daten
let requestXMLmango = new XMLHttpRequest();
let requestURLmango = 'https://world.openfoodfacts.org/api/v0/product/[5000159452540].json';
requestXMLmango.open('GET', requestURLmango);
requestXMLmango.responseType = 'text';
requestXMLmango.send();
let mangoData;
let mangoNutri;
let mangoIng = [];
requestXMLmango.onload = function () {
var superTextmango = requestXMLmango.response;
mangoData = JSON.parse(superTextmango);
getSuperMango(mangoData);
}

function getSuperMango(jsonObj) {
const ingr = jsonObj['product']['ingredients'];
const nutri = jsonObj['product']['nutriments'];
mangoNutri ="Brennwert: "+ nutri.energy + " " +  "kcal || " + "Kohlenhydrate: "+nutri.carbohydrates + " " + nutri.carbohydrates_unit + " || " + "Fett: "+ nutri.fat + " " +  nutri.fat_unit + " || "+ " " + "Eiweiß: " + nutri.proteins  + nutri.proteins_unit+ " || " + "Salz: " + nutri.salt + " " + nutri.salt_unit + " || " + "Zucker " +  nutri.sugars + " " +nutri.sugars_unit;
let i = 0;
    while(ingr[i] != undefined){
      mangoIng += ingr[i].text +" || ";
      i++; 
    }
}

//Kiwi Daten 
let requestXMLkiwi = new XMLHttpRequest();
let num = 94185454;
let requestURLkiwi = 'https://world.openfoodfacts.org/api/v0/product/['+num+'].json';
requestXMLkiwi.open('GET', requestURLkiwi);
requestXMLkiwi.responseType = 'text';
requestXMLkiwi.send();
let kiwiData;
let kiwiNutri;
let kiwiIng = [];
requestXMLkiwi.onload = function () {
var superTextkiwi = requestXMLkiwi.response;
kiwiData = JSON.parse(superTextkiwi);
getSuperkiwi(kiwiData);
}

function getSuperkiwi(jsonObj) {
const ingr = jsonObj['product']['ingredients'];
const nutri = jsonObj['product']['nutriments'];
kiwiNutri ="Brennwert: "+ nutri.energy + " " +  "kcal || " + "Kohlenhydrate: "+nutri.carbohydrates + " " + nutri.carbohydrates_unit + " || " + "Fett: "+ nutri.fat + " " +  nutri.fat_unit + " || "+ " " + "Eiweiß: " + nutri.proteins  + nutri.proteins_unit+ " || " + "Salz: " + nutri.salt + " " + nutri.salt_unit + " || " + "Zucker " +  nutri.sugars + " " +nutri.sugars_unit;

let i = 0;
    while(ingr[i] != undefined){
      kiwiIng += ingr[i].text +" || ";
      i++; 
    }
}


function MHD(DateFromMHD){
  if(DateFromMHD >= 0){
      return [{
        text: "Your food lifetime has " + DateFromMHD + " days left",
        color: "color:green"}];     
  }
      return [{
        text: "Your food lifetime is over since " + Math.abs(DateFromMHD) + " days",
        color: "color:red"}];   
    //  return "The food MHD date is over since " + Math.abs(DateFromMHD) + " days" ;
      }

let today = new Date();
let CocaCola = new Date(2021, 7, 20);
let Mango = new Date(2021, 4, 20);
let Kiwi = new Date(2022, 6, 23);

let products = [{
  ID: 1,
  name: "Coca Cola",
  img: 'https://as2.ftcdn.net/v2/jpg/01/83/31/03/500_F_183310393_A7hcmA9HKSLnym7VUPwhgmByrcvxJRoK.jpg',
  barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text=5449000017888',
  amount: 5,
  MHD: MHD(Math.round((CocaCola.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [CocaCola.getDate(), CocaCola.getMonth(), CocaCola.getFullYear()],
},
{
  ID: 2,
  name: "Snickers",
  img: 'https://world.openfoodfacts.org/images/products/500/015/945/2540/front_de.42.full.jpg',
  barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text=5000159452540',
  amount: 10,
  MHD: MHD(Math.round((Mango.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [Mango.getDate(), Mango.getMonth(), Mango.getFullYear()],
},
{
  ID: 3,
  name: "Kiwi",
  img: 'https://www.publicdomainpictures.net/pictures/70000/velka/kiwi-fruit-1389439824dsq.jpg',
  barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text=94185454',
  amount: 5,
  MHD: MHD(Math.round((Kiwi.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: [Kiwi.getDate(), Kiwi.getMonth(), Kiwi.getFullYear()]
}];

router.get('/', function(req, res, next) {
  res.render('listProducts', { products: products} );
  });

//zeigt einzelenes Produkt
  router.get('/singleProduct/:id', function (req, res) {
    let id = parseInt(req.params.id);
    const ID = products.find(c => c.ID === id);
    let sendIng;
    let sendNutri;
   if(id == 1){
      sendNutri = nutriCocaCola;
      sendIng = test;
    }else if(id == 2){
      sendNutri = mangoNutri;
      sendIng = mangoIng;
    }else if(id == 3){
      sendNutri = kiwiNutri;
      sendIng = kiwiIng;
    }
    res.render('singleProduct', { ID, sendIng, sendNutri});
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

router.get('/create', function (req, res) {
  res.render('createProduct', { });
});


//erstellt ein neues Produkt
router.post('/new', function (req, res, next) {
  
  const item = {
      ID: ++products[products.length].ID,
      barcode: req.body.barcode,
      name: nameProduct,
      img: picProduct,
      nutri: nutriText,
      ing: texti,
      amount: req.body.amount,
      MHD: MHD(Math.round(((req.body.MHD).getTime() -today.getTime())/(1000*60*60*24))),
      
  }
  let validater = true;
  let i = 0;
  /*while(products[i] != null) {
      if (JSON.stringify(products[i].Email) == JSON.stringify(item.Email)) {
          validater = false;
      }
      if (JSON.stringify(products[i].author) == JSON.stringify(item.author)) {
          validater = false;
      }
      i++;
  }*/
  
  if (!(validater)) {
      res.status(406).send('error');
  } else {
      products.push(item);
      res.send(item);
  }

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