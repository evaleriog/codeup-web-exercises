"use strict";

//Create a while loop that uses console.log() to create the output shown below

var number = 2;

while (number < 65537){
    console.log(number);
    number = number * 2;
}

///////////////////////////////////////////////////////////
// An ice cream seller can't go home until she sells all of her cones. Write a JS ' +
// 'program that generates a random number between 50 and 100 representing the ' +
// 'amount of cones to sell. Your code should generate numbers between 1 and 5, ' +
// 'simulating the amount of cones being bought by her clients. Use a do-while loop ' +
// 'to log to the console the amount of cones sold to each person.
//
var allCones = Math.floor(Math.random()*50) + 50;
var conesSold;

console.log("The total amount of cones is " + allCones);

do{
    conesSold = Math.floor(Math.random() * 5) + 1;

    if(conesSold <= allCones){
        console.log(conesSold + " cones Sold...");
        allCones = allCones - conesSold;
        console.log("Cones left: " + allCones);
    }else {
        console.log("Cannot sell you " + conesSold + " cones, I only have " + allCones + " ...");
    }
}while (allCones > 0)

console.log("Yay! I sold them all!");