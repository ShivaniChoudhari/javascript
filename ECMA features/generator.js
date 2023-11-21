"use strict";

function *dummy(){
    yield 'Hey';
    yield 'There';
    console.log("Whats your name?");
    yield 'Shivanee';
}

let Person = dummy();
console.log(Person.next().value);
console.log(Person.next().value);
console.log(Person.next().value);
