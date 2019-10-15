"use strict";
var number;

do{
    number = parseInt(prompt("Enter an odd number between 1-50: "));
}while (number % 2 === 0)

for(var x = 0; x <= 50; x++){
    if(x % 2 !== 0){
        if(x === number){
            console.log("Yikes! Skippping number: " + x);
            continue;
        }
        else {
            console.log("Here is an odd number: " + x);
        }
    }
}