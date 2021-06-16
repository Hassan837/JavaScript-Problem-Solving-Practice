
function printAnimals() {

    let animalName = "Lion";
    if ((animalName == "lion") || (animalName == "Lion") || (animalName == "leopard") || (animalName == "Leopard")) {

        console.log("Wild Animals");
    }
    else if ((animalName == "cat") || (animalName == "rabbit")) {

        console.log("Pet Animals");
    }
    else
        console.log("Unknown");

}

printAnimals()