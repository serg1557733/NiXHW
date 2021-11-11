//Синий пояс Number: flats 

function calculateEntranceandFloor(apartmentNumber, numberOfFloors, numberOfApartmentceFloor) {
    let apartForEntrance =  numberOfFloors * numberOfApartmentceFloor;

    console.log(apartForEntrance);

    let apartEntrance = Math.ceil(apartmentNumber / apartForEntrance);

    console.log(apartEntrance);

    let apartmentFloor = Math.ceil(apartmentNumber / numberOfApartmentceFloor);

    console.log(apartmentFloor % numberOfFloors);

    if (!(apartmentFloor % numberOfFloors)) {
        console.log(`Floor - ${numberOfFloors}  and Entrance - ${apartEntrance}` );
    } else {
        console.log(`Floor - ${apartmentFloor % numberOfFloors} and Entrance - ${apartEntrance}` );
    }
           
}

calculateEntranceandFloor( 5, 9, 4);
