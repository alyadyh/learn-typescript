"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
// Functions
const sum = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(sum(2, 3));
