"use strict";
// Normal function
function circleA1(r){
    const PI = 3.14;
    return PI * r * r;
}    

console.log(circleA1(10));


// Arrow functions are the functions which are written without using the keyword function and its clean
// Arrow function by using let keyword and not using the function keyword!

// First way to write an arrow function


let circleA2 = (r) => {
    const PI = 3.14; //the val of PI is going to stay the same hence "const"
    return PI * r * r;
}
console.log(circleA2(10));


// More condensed way to write an arrow function

let circleA3 = r => 3.14 * r * r;
console.log(circleA3(10));