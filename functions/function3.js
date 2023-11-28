//

function user(username){
    return `${username} has logged in`
}

console.log(user("Shivanee"))

//when nothing is passed as arguments while calling a function then it returns as undefined.

function loginDeets(name){
    if(name === undefined){     //or if(!name) : means the same as we gave earlier
        return "Error"
    }
    else{
        return `${name} has logged in`
    }
}

console.log(loginDeets("InhumanUser"))

console.log(loginDeets())
