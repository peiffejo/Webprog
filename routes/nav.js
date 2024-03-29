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
  ing: "Wasser || Zucker || Kohlensäure || Farbstoff || Säurerungsmittel Phosphorsäure || natürliches Aroma || Aroma Koffein || e150d ||",
  nutri: "Brennwert: 180 kcal || Kohlenhydrate: 10.6 g || Fett: 0 g || Eiweiß: 0g || Salz: 0 g || Zucker 10.6 g",
  amount: 5,
  MHD: MHD(Math.round((CocaCola.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: CocaCola.getFullYear() + "-0" + CocaCola.getMonth() + "-" + CocaCola.getDate(),
},
{
  ID: 2,
  name: "Snickers",
  img: 'https://world.openfoodfacts.org/images/products/500/015/945/2540/front_de.42.full.jpg',
  barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text=5000159452540',
  ing: "Zucker || Glukosesirup || Erdnüsse Magermilchpulver || Kakaobutter || Kakaomasse || Sonnenblumenöl || Butterreinfett || Milchzucker || Molkepermeat || Palmfett || Salz || Emulgator || Hühnerei || Trockeneiweiss || Milcheiweiss || Vanilleextrakt || PT Chocolate de leito 00 || aus Milch || aus Milch || Sojalecithin || ",
  nutri: "Brennwert: 2023 kcal || Kohlenhydrate: 60.2 g || Fett: 22.8 g || Eiweiß: 8.6g || Salz: 0.63 g || Zucker 51.5 g",
  amount: 10,
  MHD: MHD(Math.round((Mango.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: Mango.getFullYear()+ "-0" + Mango.getMonth()+ "-" + Mango.getDate(),
},
{
  ID: 3,
  name: "Kiwi",
  img: 'https://www.publicdomainpictures.net/pictures/70000/velka/kiwi-fruit-1389439824dsq.jpg',
  barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text=94185454',
  ing: "Kiwi",
  nutri: "Brennwert: undefined kcal || Kohlenhydrate: undefined undefined || Fett: undefined undefined || Eiweiß: undefinedundefined || Salz: undefined undefined || Zucker undefined undefined",
  amount: 5,
  MHD: MHD(Math.round((Kiwi.getTime() -today.getTime())/(1000*60*60*24))),
  MHDdate: Kiwi.getFullYear()+ "-0" + Kiwi.getMonth()+ "-" + Kiwi.getDate(),
}];

router.get('/', function(req, res, next) {
  res.render('listProducts', { products: products} );
  });

//zeigt einzelenes Produkt
  router.get('/singleProduct/:id', function (req, res) {
    let id = parseInt(req.params.id);
    const ID = products.find(c => c.ID === id);
    res.render('singleProduct', {ID});
});

//Zeigt alle Produkte
router.get('/list', function (req, res) {
  res.render('listProducts', { products: products });
});

router.get('/singlePost/:ID', function (req, res) {
  let post = posts.find(p => p.id === parseInt(req.params.ID));
  res.render('listProducts', {ID});
});

router.get('/create', function (req, res) {
  res.render('createProduct', { });
});

function IDgenerator(){
  return parseInt((new Date()).getTime());
}

//erstellt ein neues Produkt
router.post('/new', function (req, res, next) {
  const item = {
      ID: IDgenerator(),
      name:req.body.name,
      img: req.body.img,
      barcode: 'http://bwipjs-api.metafloor.com/?bcid=code128&text='+ req.body.barcode,
      ing: req.body.ing,
      nutri: req.body.nutri,
      amount: req.body.amount,
      MHD:MHD(req.body.MHD),
      MHDdate:req.body.MHDdate,
  };

  console.log(item);

  /*while(products[i] != null) {
      if (JSON.stringify(products[i].Email) == JSON.stringify(item.Email)) {
          validater = false;
      }
      if (JSON.stringify(products[i].author) == JSON.stringify(item.author)) {
          validater = false;
      }
      i++;
  }*/
  
      products.push(item);
      res.send(item);

});


//ändert das Produkt
router.put('/change/:postID', function (req, res, next) {
  let post = products.find(p => p.ID === parseInt(req.params.postID));
  if (!post) {
      res.status(404).send('Post not found');
  }
  post.name = req.body.name;
  post.amount = req.body.amount;
  post.MHD = MHD(req.body.MHD);
  post.MHDdate = req.body.MHDdate;
  post.ing = req.body.ing;
  console.log(post.ing)
  let validater = true;
  if (!(validater)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.send(JSON.stringify('error'));
  } else {
  res.send(products);
  }
});

//Produkt menge um 1 erhöhen
router.put('/plusOne/:postID', function (req, res, next) {
  let post = products.find(p => p.ID === parseInt(req.params.postID));
  if (!post) {
      res.status(404).send('Post not found');
  }
  post.amount = req.body.amount;
  res.send(products);
});

router.get('/change/:postID', function(req, res, next) {
  let post = posts.find(p => p.id === parseInt(req.params.postID));
  if(!post) {
      res.status(404).send('Post not found'); 
  }
  post.author = req.body.author;
  post.title = req.body.title;
  post.text = req.body.text;
  res.send(posts);
});
  
module.exports = router;