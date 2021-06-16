let numbers = [2,0,1,6 , 89,45,];
let largest= numbers[0];

for (i=0; i< numbers.length;i++){
    if (largest < numbers[i] ) {
        largest = numbers[i];
    }
}
    console.log("Largest number is " ,largest);