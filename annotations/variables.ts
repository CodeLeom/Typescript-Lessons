let myName = 'Keziah Ching' //inference
let isMarried = false
let nothingMuch = null
let nothing = undefined
let VarToday = new Date()
let cars = ['Mercedes', 'Audi', 'BMW', 34]
let myScore = [23, 43, 78]

//annotating an object
let point: {x: number; y: number; z: number} = {
    x: 10,
    y: 12,
    z: 34
}

//function annotation 
const logNumber: (k: number) => void = (k: number) => {
    console.log(k)
}


//when a declaration and initialization is done seperatly

let fellows = ['Simisola Olubodun', 'Keziah Ching', 'Joy Abel', 'Ivy Wanjohi']
let isFellow: boolean; //declaration

for (let k = 0; k < fellows.length; k++){
    if(fellows[k] === 'Joy Abel'){
        isFellow = true; //initialization
    }
}

//when you want a variable to have a value that cannot be inferred

let numbers = [-10, -1, 12]
let numAboveZero: boolean | number = false; //if theres number above zero, store it here, else return false (boolean and number)

for (let u = 0; u < numbers.length; u++){
    if(numbers[u] > 0){
        numAboveZero = numbers[u]
    }
}


// when the functions return the 'any' type

const json = '{"name": "Simisola Olubodun", "age": 27}' 
const user: {name: string; age: number} = JSON.parse(json)
console.log(user) //{name: Simisola Olubodun, age: 27}