//You want to bring out only what you need in an array or object = destructuring

//object
const vehicle = {
    brand: 'Mercedes Benz',
    model: 'GLE Coupe',
    type: 'SUV',
    year: 2021,
    color: 'Mate Black',
    isFast: true
}



function myVehicle({type, brand, color}){
    const msg = 'My car is a ' + color + ' ' + brand + ' ' + type + '.';

    console.log(msg)
}

myVehicle(vehicle)