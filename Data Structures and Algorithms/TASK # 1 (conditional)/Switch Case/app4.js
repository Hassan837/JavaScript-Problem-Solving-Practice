let number = 21545745;

// When we use switch(true) then if the expression in my case evaluates to true - it will be matched.
switch (true){

case (number % 2 == 0):
        console.log(number, "Its an even number");
        break;
    
default:
        console.log(number, "Its an odd number");
        break;

}