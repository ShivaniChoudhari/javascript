"use strict";

function add(a, b, c){
    console.log(a + b + c);
}

var nums = [1, 2, 3];
add(nums[0], nums[1], nums[2]); //Lengthy way to write it

add(...nums); //By using spread operator. CONDENSED!

var fruits = ["Apple", "Mango", "Banana"];
var veggies = ["potato", "brinjal", ...fruits]; //concatinating strings by spread operator
console.log(veggies);