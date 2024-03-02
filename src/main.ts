let guitars = ['Strat', 'Les Paul', 5150]
guitars[0] = 2003

let stringArr = ['one', 'hey', 'Alya']
stringArr.push('halo')

let mixedData = ['EVH', 1984, true]
mixedData.push(false)

mixedData = guitars

// cannot in reverse
// guitars = mixedData -> cuz guitars only accept datatype string and number

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Alya', 21, true]
let mixed = ['Hey', 1, false]

mixed = myTuple

// myTuple = mixed -> can't be run cuz myTuple is more strict

// Object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Alya',
    prop2: true,
}

exampleObj.prop1 = 'Dhiya'

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(jp))

// Enums
// "Unlike most TypeScript features, enums are not a type-level
// addition to JavaScript but something added to the language and runtime"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}