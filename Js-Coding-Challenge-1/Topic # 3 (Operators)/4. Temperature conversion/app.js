// convert Celsius in to Fahrenheit
function convert1(){
var C =34; 

var F;

F = (1.8 * C) + 32;

document.querySelector('#inp1').innerHTML = 'The Value of Celsius is 60 degree after converting into fahrenheit is =  ' + F+'C';
}



// convert Fahrenheit into celsius
function convert2(){
    var C ; 
    
    var F = 98;
    
    C = (F - 32) / 1.8;
    
    document.querySelector('#inp2').innerHTML = 'The Value of Fahrenheit is 98 degree after converting into Celsius is =  ' + C+'F';
    }