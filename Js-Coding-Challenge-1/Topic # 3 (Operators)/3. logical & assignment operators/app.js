//logical operator

//AND &&
function logic1(){
    let x = 6, y = 10;
    
    document.querySelector('#para1').innerHTML = (x < 10 && y > 1) + "<br><br>" + 
    (x < 10 && y < 1);

}


//OR ||
function logic2(){
    let x = 6, y = 10;
    
    document.querySelector('#para2').innerHTML = (x == 10 || y == 1) + "<br><br>" + 
    (x === 6 && y === 10) + "<br><br>" + (x === 6 || y === 10);

}

//NOT !
function logic3(){
    let x = 6, y = 10;
    
    document.querySelector('#para3').innerHTML = !(x < y) + "<br><br>" + 
    !(x > y);

}

