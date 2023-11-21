"use strict";

let obj1 = {
    name1: "shivanee",
    gender:"female",
    weight:62
}

let name2 = obj1.name1;
let gender2 = obj1.gender;
let weight1 = obj1.weight;
console.log(name2, gender2, weight1)

//Destructuring

let {name3, gender3, weight3} = obj1;
console.log(name3, gender3, weight3);

//Example of destructuring

function operations(a, b){
    let add = a + b;
    let substract = a - b;
    let multiply = a * b;
    let division = a/b;
    console.log[add, substract, multiply, division];
}

let [add, substract, multiply, division] = operations(10, 2);
