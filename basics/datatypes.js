"use strict" //written to treat the writen code as the newer version

// alert("Hey there");  //only runs in browser!

//types of primitive datatypes - theyre call by value data types

//number => from 2 to the power of 52

//bigint => from numbers larger than above

//string => written in ""

//boolean => true/false

//null => stand alone value, empty.Not ZERO. Eg: let name = null (empty not undefined)

//undefined => when var is declared but not given any value

//symbol => to identify components to be unique, sigma tools uses it

//NON PRIMITIVE datatypes - call by reference data types
//web-events and objects

//array
const heroes = ["Spiderman", "iron man", "thor"]
console.log("ARRAY OF HEROES", ...heroes)
console.log(heroes)

//object
let myObj = {
    myName : "Shivanee",
    age : 23
}
console.log("First Object:", myObj)
console.log("Name:", myObj.myName)
console.log("Age:", myObj.age)

//functions
const myFunction = function(){
    console.log("Functions")
}

// console.log("My first function:", myFunction)


let namee = null
console.log(typeof namee)
//typeof null is object

//typeof undefined is undefined

// ----------------------------------------------------------------
//interview perspective on data types

//is js a dynamically types language?
//ANS: Yes it is. The datatype is determined at the time of compilation
//so we dont mention it specifically.

