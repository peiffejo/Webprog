function MHD(MHD){
    if(MHD >= 0){
        document.getElementById('love').innerHTML = "Your food lifetime has " + MHD + " days left" ;  
        }else{
        document.getElementById('love').innerHTML = "The food MHD date is over since " + Math.abs(MHD) + " days" ;
        }
}