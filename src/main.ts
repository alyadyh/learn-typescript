// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Alya'
let userName: 'Alya' | 'Dave' | 'Amy'
userName = 'Amy'

// Functions
const sum = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello')
logMsg(sum(2,3))

let substract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number) : number
// }

let multiply: mathFunction = function(c, d) {
    return c * d
}

// optional parameters
const addAll = (a: number, b: number, c?: number): 
number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default parameters value
const sumAll = (a: number, b: number, c: number = 2): 
number => {
    return a + b
}

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}

// use of the never type
const numberOrString = (value: number | string):
string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError(`This should never happen!`)
}