let array = [1, 8, 7, 3, 2, 9, 10, 12];

for(var i=0;i<array.length;i++) {
    var result = array[i] %2;
    if(result == 0) {
        console.log(array[i] , "Prime Number");
        
    }
    else {
        console.log(array[i] ,"Odd number")
    }
}