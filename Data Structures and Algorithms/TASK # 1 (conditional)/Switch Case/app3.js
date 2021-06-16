let number = "10";

// When we use switch(true) then if the expression in my case evaluates to true - it will be matched.
switch (true) {

    case (number < 10):
        console.log("less than 10");
        break;


    case (number > 10):
        console.log("greater than 10");
        break;


    case (number === 10):
        console.log("The number you entered is 10");
        break;
    
    default:
        console.log("The number is not equal to 10");
        break;

}