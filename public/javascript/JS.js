const { response } = require("express");

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


//löscht das Produkt
document.getElementById('deleteBtn')?.addEventListener('click', function () {
    let ID = document.getElementById('deleteBtn').value;
            alert(ID);
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


    