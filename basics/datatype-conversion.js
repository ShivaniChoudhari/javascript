"use strict";

let myName = "Shivanee"

let myScore = 90

console.log(typeof myScore)

let valueInNumber = Number(myName)

console.log(typeof valueInNumber)

console.log(valueInNumber)

//even if you try to convert string to number it returns typeof as number but when
//we log it, it gives NaN (Not a Number)

//this is the drawback of js which is why ts is mostly used

let boolVal = 4545
let valBool = Boolean(boolVal)

console.log(valBool)