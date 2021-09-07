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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      response.text().then(function (text) {
        window.location = '/blog';
      });
    });
  });
>>>>>>> Stashed changes
