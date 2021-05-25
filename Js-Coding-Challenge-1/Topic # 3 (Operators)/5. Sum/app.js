function total(){

    var a = parseInt (document.querySelector('#inp1').value);

    var b = parseInt (document.querySelector('#inp2').value);

    var c;

    c = a + b;

    document.querySelector('#sum1').innerHTML = 'The Total Sum =' +  c ;

}