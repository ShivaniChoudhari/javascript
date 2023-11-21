"use strict";

function dummyLet(){
    let capGood = true;
    let caption = "I am good";
    console.log("Before if: ", caption);

    if(capGood){
        let caption = "I am not good";
        console.log("\nIn if: ", caption);
    }

    console.log("\nAfter if:", caption);
}

dummyLet();

// Let is a keyword which we can use to declare variables that can be 
// accessed in that particular block like funtions, conditional statements, etc 
// If the let variable is not found in that particular block then it will try to find the 
// nearest let element to the block and print the same.