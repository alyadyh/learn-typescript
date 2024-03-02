"use strict";
let guitars = ['Strat', 'Les Paul', 5150];
guitars[0] = 2003;
let stringArr = ['one', 'hey', 'Alya'];
stringArr.push('halo');
let mixedData = ['EVH', 1984, true];
mixedData.push(false);
mixedData = guitars;
// cannot in reverse
// guitars = mixedData -> cuz guitars only accept datatype string and number
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Alya', 21, true];
let mixed = ['Hey', 1, false];
mixed = myTuple;
// myTuple = mixed -> can't be run cuz myTuple is more strict
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Alya',
    prop2: true,
};
exampleObj.prop1 = 'Dhiya';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, enums are not a type-level
// addition to JavaScript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
