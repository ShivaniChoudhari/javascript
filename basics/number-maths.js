// to define a specific data type

// const score = new Number(200);

// console.log(score)

// Math.random
// always returns value between 0 and 1
// console.log(Math.random())

const number = 20024.4641
// console.log(number.toPrecision(6)) 

//formula to print number between a certain range!!!
const min = 40
const max = 100

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//Date and time

let createDate = new Date(2023, 6, 12, 15, 21)
console.log(createDate.toLocaleString())

let timeS = Date.now()
console.log(timeS)

let timeStamp = Math.floor(timeS/1000);
console.log(timeStamp)
console.log(Math.floor(timeStamp/60))