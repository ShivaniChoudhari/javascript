//Array

// its okay to store different types of elements in arrays


//shallow copy : properties share the same ref
///deep copy : properties share different ref


const array1 = ["hey", 1, 2, 45, "bye"]

console.log(array1.length)

//Array Methods

//1. push() - to add new element to array by passing a value in ("value")
array1.push("new")
console.log(array1)

//2. pop() - to remove the latest element. No need to pass anything
array1.pop()
console.log(array1)

//join()  converts the array to string
// const array2 = [1, 2, 3, 4]
const array3 = array1.join()
console.log(array3)
console.log(typeof array3)

//shift() - removes the value from start
// unshift() - adds value at start 

const arr4 = [1, 2, 3]
arr4.unshift(10)
console.log(arr4)

const arr5 = [52, 65, 98, 100]
arr5.shift()
console.log(arr5)

//slice and splice

//slice() - need to give range eg. slice(0,4) It means we need to print 1,2,3,4 and not include 4th and doesnt change the main array after this operation
//splice() - need to give range. Takes elements from mentioned range including the last range limit and changes the main array after the operation and returns only the remaining elements in main array
const array5 = [1,2,3,4,5]

const newArr5 = array5.slice(1, 4)
console.log("5th:", array5) //prints array as it is
console.log(newArr5)

const array6 = [1,2,3,4,5]
const newArr6 = array6.splice(1, 4)
console.log("6th:", array6) //prints remaining elements which dont come in the mentioned range
console.log(newArr6)

console.log("------------------------------------")
//spread operator
console.log("Spread Operator")
let arr11 = [1,2,3,4]
let arr22 = [5,6,7,8]

console.log(...arr11, ...arr22)





 