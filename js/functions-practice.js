"use strict";

function multiplication(x, y){
    return x * y;
}

// var multiplication = function (x,y) {
//     return x * y;
// };

function division(x,y){
    return x / y;
}

// var division = function(x, y){
//     return x / y;
// };

console.log(multiplication(5, 3));
console.log(division(10, 2));



function getRandomItem(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random = getRandomItem(15, 18);
console.log(random);

function rest(name){
    return name.substring(1, name.length);
}

console.log(rest("eduardo"));

function reverse(string){
    return string.split("").reverse().join("");
}

console.log(reverse("eduardo"));