function addition(num1, num2){               //parameters
    console.log("Addition is: ", num1 + num2)
}

addition(10, 12) //arguments

//no need to specify the type
//while writing function the things we pass in it are called "parameters"
//while calling a function the things we pass in it are called "arguments"

//if we store the function in another variable then the value will be undefined since the function is not returning it, instead we have just called console log

//eg:

function add2(a, b){
    console.log(a+b)                  //only console-ing. NOT returning
}

let result = add2(3,4);

console.log("Result", result)         //undefined

//To also store the value in a variable

function add3(c, d){
    return c + d        //returns this value for the function
    console.log("Hey")
}

let res = add3(10, 20)

console.log("variable", res)   //prints the value returned by function


//code written after return is never executed and is termed as unreachable code




