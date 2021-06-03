 let percentage = parseInt (prompt("Enter your color"));


switch(true){
    case percentage> 85:
    
        alert("The Grade is 'A'");
    
    break;

    case percentage <= 85:
        
    case percentage > 80:
        alert("The Grade is 'A-'");
    break;
    
    case percentage <= 80:
    case percentage > 70:
        alert("The Grade is 'B'");
    
    break;

    case percentage <= 70:
    case percentage > 60:
        alert("The Grade is 'C'");
    
    break;

    case percentage <= 60:
    case percentage > 40:
        alert("The Grade is 'D'");
    
    break;

    case percentage <= 40:
    
        alert("The Grade is 'E'");
    
    break;

    case percentage <= 35:
    
        alert("Canidate Failed");
    
    break;
    default:
        alert("default condition");    
    
        //console.log("default condition");
}