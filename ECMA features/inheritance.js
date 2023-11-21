"use strict";

class Person{                                    //main class, parent class, super class
    constructor(MYname, age, weight){
        this.MYname = MYname;
        this.age = age;
        this.weight = weight;
    }

    //Methods
    displayName(){
        console.log(this.MYname);
    }
    
    displayAge(){
        console.log(this.age);
    }

    displayWeight(){
        console.log(this.weight);
    }
}

class Human extends Person{                            //sub/child class extended parent class
    constructor(MYname, age, weight, gender){
        super(MYname, age, weight);                   //calling parent constructor
        this.gender = gender;                         //additional parameter which isnt there in parent constructor
    }
        
        displayGender(){
            console.log(this.gender);
        }
}
//if we pass less values then we get the output as undefined on calling
let Shivanee = new Person("Shivanee", 23, 61);
let Vish = new Human("Vish", 24, 60, "Male");

Vish.displayGender();
Shivanee.displayName();
