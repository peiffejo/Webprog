<<<<<<< HEAD
<<<<<<< Updated upstream
=======
function MHD(MHD){
    if(MHD >= 0){
        document.getElementById('love').innerHTML = "Your food lifetime has " + MHD + " days left" ;  
        }else{
        document.getElementById('love').innerHTML = "The food MHD date is over since " + Math.abs(MHD) + " days" ;
        }
}


document.getElementById('DeteailBtn')?.addEventListener('click', function () {
    let ID = document.getElementById('DetailBtn').value;
    fetch('/blog/change/' + ID, {
      method: 'GET',
=======

//plus 1 bei Menge
document.getElementById('plusOne')?.addEventListener('click', function () {
    let ID = document.getElementById('deleteBtn').value;
    let getAmount = parseInt((document.getElementById('plusOne').value))+1;
    let data = { 
        amount: getAmount
    };
      fetch('/nav/plusOne/' + ID, {
        method: 'Put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
          response.text().then(function (text) {
            window.location = '/singleProduct/'+ID;
          });
        
      });
  });
  document.getElementById('single')?.addEventListener('click', function () {
    let ID = document.getElementById('deleteBtn').value;
    let getAmount = parseInt((document.getElementById('plusOne').value))+1;
    let data = { 
        amount: getAmount
    };
      fetch('/nav/plusOne/' + ID, {
        method: 'Put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
          response.text().then(function (text) {
            window.location = '/singleProduct/'+ID;
          });
        
      });
  });
//ändert Daten des Produkts
  document.getElementById('PostButton')?.addEventListener('click', function () {
    let ID = document.getElementById('PostButton').value;
    let data = {
      name: document.getElementById('name').value,
      amount: document.getElementById('amount').value,
      MHD: document.getElementById('hiddenMHD').value,
      MHDdate: document.getElementById('hiddenMHDlong').value,
      ing: document.getElementById('Stoffe').value,
    };
    console.log(data.ing);
    let errorRes = validateEdit(data);
    if(errorRes[0].test){
      fetch('/nav/change/' + ID, {
        method: 'Put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        if (response.status == 200) {
          response.text().then(function (text) {
            window.location = '/list';
  
          });
        }else{
          response.text().then(function (text) {
            console.log(text)
          });
        }
      });
    }else{
      let errorResHtml = document.getElementById('errorRes');
      errorResHtml.innerText = errorRes[0].text ;
    }
  });

  //minus 1 bei Menge und löscht falls 0
document.getElementById('minusOne')?.addEventListener('click', function () {
    let ID = document.getElementById('deleteBtn').value;
    let getAmount = parseInt((document.getElementById('minusOne').value))-1;
    let data = { 
        amount: getAmount
    };
      fetch('/nav/plusOne/' + ID, {
        method: 'Put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
          if(getAmount > 0){
          response.text().then(function (text) {
            window.location = '/singleProduct/'+ID;
          });
        }else{
          response.text().then(function (text) {
            fetch('/nav/delete/' + ID, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                        },
                    }).then(function (response) {
                    response.text().then(function (text) {
                    window.location = '/list';
                        });
                    });
          }); 
        }
        
      });
  });

//fügt neues Produkt hinzu
document.getElementById('createPostButton')?.addEventListener('click', function () {
  let data = {
    name: document.getElementById('hiddenName').value,
    img: document.getElementById('hiddenImg').value ,
    barcode: document.getElementById('name').value,
    ing:document.getElementById('hiddenIng').value,
    nutri:document.getElementById('hiddenNutri').value,
    amount: document.getElementById('amount').value,
    MHD: document.getElementById('hiddenMHD').value,
    MHDdate: document.getElementById('hiddenMHDlong').value,
  };
  let errorRes = validate(data);
  if(errorRes[0].test){
    fetch('/nav/new', {
      method: 'Post',
>>>>>>> 702c5531e4326b68921eea544e3bcb8be71ee605
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
<<<<<<< HEAD
      response.text().then(function (text) {
        window.location = '/blog';
      });
    });
  });
>>>>>>> Stashed changes
=======
      console.log(response);
      if (response.status == 406){
        response.text().then(function (text) {
          console.log(text);
          errorRes = document.getElementById('errorRes');
          errorRes.innerText = text;
         });
      }else{
        response.text().then(function (text) {
         window.location = '/list';
        });
      }
    })
  }else{
    let errorResHtml = document.getElementById('errorRes');
    errorResHtml.innerText = errorRes[0].text ;
  }
});

function validate(data) {
  let text;
  var barcode = data.barcode;
  var amount = data.amount;
  var date = data.MHDdate;
  var intRegex = /^\d+$/;
  var dateRegex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}/;
  if(!(intRegex.test(barcode))){
       text = [{test: false,
                text: "ERROR: Checke deinen EAN-Barcode ob \n 1. Wrklich nur aus Zahlen besteht \n 2. Es leer ist"}];
        return text;
  }
  if(!(intRegex.test(amount))){
    text = [{test: false,
      text: "ERROR: Checke deine Menge ob \n 1. Die Menge negativ ist \n 2. Sich Sonderzeichen oder Buchstaben im Text befinden \n 3. Es vielleicht leer ist"}];
return text;
  }
  if(!(dateRegex.test(date))){
    text = [{test: false,
      text: "Check nochmal das Datum ob du es richtig angeklickt hast"}];
      return text;
  }
  text = [{test: true,
    text: ""}];
  return text;
}

function validateEdit(data) {
  let text;
  var name = data.name;
  var amount = data.amount;
  var date = data.MHDdate;
  var ing = data.ing;
  var intRegex = /^\d+$/;
  var nameRegex = /^.+$/;
  var dateRegex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}/;
  if(!(nameRegex.test(name))){
       text = [{test: false,
                text: "ERROR: Checke den Namen ob \n 1. Er vielleicht leer ist " + name}];
        return text;
  }
  if(!(intRegex.test(amount))){
    text = [{test: false,
      text: "ERROR: Checke deine Menge ob \n 1. Die Menge negativ ist \n 2. Sich Sonderzeichen oder Buchstaben im Text befinden \n 3. Es vielleicht leer ist"}];
return text;
  }
  if(!(dateRegex.test(date))){
    text = [{test: false,
      text: "Check nochmal das Datum ob du es richtig angeklickt hast"}];
      return text;
  }
  if(!(nameRegex.test(ing))){
    text = [{test: false,
      text: "ERROR: Checke die Inhaltsstoffe ob \n 1. Es vielleicht leer ist"}];
      return text;
  }
  text = [{test: true,
    text: ""}];
  return text;
}


//löscht das Produkt
document.getElementById('deleteBtn')?.addEventListener('click', function () {
    let ID = document.getElementById('deleteBtn').value;
            alert("Produkt mit Artikelnummer: " + ID + " wurde gelöscht!");
            fetch('/nav/delete/' + ID, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
                }).then(function (response) {
                response.text().then(function (text) {
                window.location = '/list';
                    });
                });
            });


    
>>>>>>> 702c5531e4326b68921eea544e3bcb8be71ee605
