// where each element is consistent type

const carBrands = ['Ford', 'Toyota', 'Honda', 'Chevrolet']

const carModel: string[][] = [['Corolla', 'Avensis', 'Camry', 'Prado']]

/*
    - TS can do type infrence when extracting value from the array.
    - TS can prevent you from adding incompatible values into the array
    - We can use 'map', forEach, reduce with the array.
    - Flexibility
*/

const car = carBrands[0]
carBrands.push(false) //error
carBrands.map((car: string): string => {
    return car
})

const blessing = [{name: 'Blessing Peter', age: 27}, {name: 'Peace Nwosu', age: 29}]


//turple
/*
    it is an array-like structure where each element represent some property of a record
*/
const drinks = ['coke', 'fanta', "malt"]

const drink = {
    color: 'black',
    carbonated: true,
    sugar: 12
}

const malt: [string, boolean, number] = ['black', true, 12] //turple

// type Alias

type Drink = [string, boolean, number]

const fanta: Drink = ['yellow', true, 20]
const tea: Drink = ['brown', false, 0]

//Note: object is easier to understand at a glance, but turple is not.