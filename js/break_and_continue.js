"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break
// statement to continue prompting the user if they enter invalid input.

var number = true;

while(number){
    number = parseInt(prompt("Enter an odd number between 1-50: "));

    if((1 <= number) && (number <= 50) && (number % 2 !== 0)) {
        break;
    }
    else {
        number = true;
    }
}

// Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.git

for(var x = 0; x <= 50; x++){
    if(x % 2 !== 0){
        if(x === number){
            console.log("Yikes! Skipping number: " + x);
            continue;
        }
        else {
            console.log("Here is an odd number: " + x);
        }
    }
}