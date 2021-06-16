let numbers = [2,0,1,6 , 89,45,];
let smallest= numbers[0];

for (i=0; i< numbers.length;i++){
    if (smallest > numbers[i] ) {
        smallest = numbers[i];
    }
}
    console.log("smallest number is " ,smallest);