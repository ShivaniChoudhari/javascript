"use strict";

class Person{
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(this.weight);  //method. Something that is written inside the class!
    }
}

let Shivanee = new Person("Shivanee", 23, 61);
Shivanee.displayWeight();