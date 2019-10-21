"use strict";

// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the
// numbers 1 through 10)

function showMultiplicationTable(number){
    for(var x = 1; x <= 10; x++){
        console.log(number.toString() + " x " + x + " = " + (number*x));
    }
}

showMultiplicationTable(7);

///////////////////////////////////////////////////////////
// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console whether each
// number is odd or even

var comparison;

for(var y = 1; y <= 10; y++){
    comparison = Math.floor(Math.random() * 200) + 20;

    if(comparison % 2 === 0){
        console.log(comparison + " is even");
    }
    else {
        console.log(comparison + " is odd");
    }
}

///////////////////////////////////////////////////////////
//Create a for loop that uses console.log to create the output shown below

var string = "";

for(var z = 1; z <= 9; z++){
    for(var a = 1; a <= z; a++){
        string = string + z.toString();
    }
    console.log(string);
    string = "";
}

//Create a for loop that uses console.log to create the output shown below
for(var b = 100; b > 0; b -= 5){
    console.log(b);
}