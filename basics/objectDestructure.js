//Both objects and arrays can be destructured
//Destructuring is done to avoid using language.name all the time and to directly access the key w just its name
//Mostly used so keep in practise!


const language = {
    name : "JavaS",
    tutor : "ChaiNCode",
    durationInHours : 90 
}

const {name, tutor, durationInHours} = language

console.log(name)

const Bees = {
    BeeName : "Shivanee",
    BeeAge : 24,
    BeeGender : "Female"
}

const {BeeName : Fname} = Bees

console.log(Fname)

///React example for destructuring using arrow function

const navbar = ({company}) => {

}

navbar(company = "Shivanee")