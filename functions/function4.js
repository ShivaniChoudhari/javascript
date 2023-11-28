//this function is useful when building e commerce websites, especially for items in cart

//rest operator is same as spread operator, uses 3 dots and is used when we have too many arguments and just one parameter.

//Eg

function cartItems(...num1){                         //rest operator
    return num1
}

console.log(cartItems(200,300,400))                 //gives the array in result by clustering all the items as one

function cartList(num2){
    return num2[0]
}

console.log(cartList([100,200,300, 300]))