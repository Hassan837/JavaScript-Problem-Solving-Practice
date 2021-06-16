function printAnimals() {

    let animalName = "leopard";

    switch(animalName){

    
    case "lion":
    case "Lion":
    case "leopard":
    case "Leopard": 

        console.log("Wild Animals");
        break;

    case "cat":
    case "rabbit":

        console.log("Pet Animals");
        break;

    default:
        console.log("Unknown");
        break;
    }
}

printAnimals();