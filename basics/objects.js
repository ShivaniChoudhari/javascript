//2 types to declare an object. Literal and constructor
//{} that denotes that its an object
//singleton object - when we declare object as literal then its not singleton. Singleton when we declare it as constructor

//object literals

mySym = Symbol("key1")

const myUser = {
    name : "Shivanee",
    "last name" : "Choudhari",
    age : 23,
    email : "shivani@gmail.com",
    gender : "Female",
    isActive : true,
    [mySym] : "hey there"
}

console.log(myUser.name)
console.log(myUser["gender"])
console.log(myUser["last name"])
console.log(myUser[mySym])
console.log(myUser)
myUser.email = "shivanic@gmail.com"

//can be accessed in 2 manners as shown above. Square brackets are used to access the names with spaces.

//To freeze a value so that it cant be overwritten

// Object.freeze(myUser)
myUser.email = "dummy@gmail.com"

console.log(myUser["email"])

//functions of an object

myUser.greetings = function(){
    console.log("Hey whats up")
}

console.log(myUser.greetings()) //access a method by giving round braces. 
//If we dont give the braces then it will just return just the reference of it since it doesnt get executed.

myUser.greeting2 = function(){
    console.log(`Welcome back, ${this.name} ${this["last name"]}`)
}

console.log(myUser.greeting2())

//singleton OBJECTS

const newUser = new Object()  //singleton object

newUser.name = "Shivanee"
newUser.id = 3
newUser.gender = "Female"
console.log(newUser)

const dummy = {
    fullname : {                   //nested object
        firstname : "Shivanee",
        middlename : "Cutie",
        lastame : "Choudhari"
    },
    gender : "Female",
    age : 23
}

dummy.greeting = function(){
    console.log(`Hey there, ${this.fullname.firstname}`)
}
console.log(dummy.greeting())

console.log(dummy.fullname.middlename)
console.log(dummy.fullname)
//Object.create

//Merging 2 objects together


///METHOD1
const obj1 = {
    name : "Shivanee",
    age : 24
}

const obj2 = {
    gender : "Female",
    height : 162,
}

const obj3 = Object.assign({}, obj1, obj2)  //merging o1 and o2 in o3

//empty brackets is given since its the target and the rest is source. Object.assign(target, source)

console.log(obj3)

//METHOD 2 : merging objects by spread operator

const obj4 = {...obj1, ...obj2}
console.log(obj4)