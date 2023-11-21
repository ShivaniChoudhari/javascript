"use strict";

function multiply(a, b, c, d){
  let result = a * b * c *d;
  console.log(result);
}

let arr = [42, 12, 52, 12];
multiply(...arr);

let obj1 = {
    MyName : "Shivanee",
    gender : "Female",
    hobbies : "Playing games"
}

let obj2 = {...obj1, hobbies : "Reading books"};

console.log(obj2);
