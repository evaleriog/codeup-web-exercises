"use strict";

var one = 23;
var two = 12;

function sum(x, y){
    return x + y;
}

console.log(sum(one, two));

function triangleArea(side1, side2, side3){
    //return (side1+side2+side3)/2;
    //correct answer
    var half = (side1+side2+side3)/2;
    var area = Math.sqrt(half*(half-side1)*(half-side2)*(half-side3));
    return area;

}

console.log(triangleArea(5,6,7));

//Monday 09/23/2019 morning warmup, function that prints 'hi'
function hello(){
    //console.log("Hi");
    return "Hi";
}

console.log(hello());

//Wednesday 09/25/2019 morning warmup, function that prints hello and a name
function helloName(name){
    var completeString = "Hello, " + name.toString() + ".";

    return completeString;
}

console.log(helloName("Eduardo"));

//Thursday 09/26/2019 morning warmup, function that prints first element of an array
function firstElement(array){
    var newArray = array;
    return array[0];
}
var numbers = [1,2,3,4];
console.log(firstElement(numbers));

//Friday 09/27/2019 morning warmup, function that calculates the area of an equilateral triangle
function equilateralArea(value){
    var area = (Math.sqrt(3)/4)* (value * value);
    return area;
}

console.log(equilateralArea(3));
//test

//Monday 09/30/2019 morning warmup, function that concatenates 3 strings
function concatenateStrings(string1, string2, string3){
    var newString = string1.toString() + " " + string2.toString() + " " + string3.toString();

    return newString;
}

console.log(concatenateStrings("hello ", "my name is", " Eduardo"));

//Tuesday 10/01/2019 morning warmup, function that takes a string and returns string upper-case
function stringUpperCase(name){
    return name.toUpperCase();
}

console.log(stringUpperCase("eDuaRdo"));

//Wednesday 10/02/2019 morning warmup, function that calculates the area of a circle given the diameter
function areaCircle(diameter){
    var radius = diameter / 2;

    return Math.PI *(radius * radius);
}

console.log(areaCircle(10));

//function to calculate the perimieter of a quadrilateral
function perimeterQuadrilateral(a,b,c,d){
    return a + b + c + d;
}

console.log(perimeterQuadrilateral(5,7,9,11));

//Friday 10/04/2019 function that returns the argument type
function typeArgument(argument){
    return typeof(argument);
}

console.log(typeArgument(123));

//Monday 10/07/2019 function that returns true with positive even numbers
function positiveEven(number){
    if((number > 0) && (number%2===0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(positiveEven(10));

//Tuesday 10/08/2019 function that prompts an user for a number and returns if it is greater than five
function greaterFive(){
    var number = parseInt(prompt("Please enter a number: "));
    return number > 5;
}

console.log("The number being greater than five is " + greaterFive());

//Function that returns the message "Hello there, stranger" with the option fore the user to input a string to
//replace stranger
// function sayHello(name = "stranger"){
//     return "Hello there, " + name + ".";
// }
//
// var promptName = prompt("Enter a name:");
// alert(sayHello(promptName));

//function that accepts and array and returns the length of that array
function arrayLength(array){
    return array.length;
}

console.log(arrayLength([1, 2, 3, 4, 5]));

//Morning warmup 10/11/19. write a function that returns the quotients of two numbers
//but only when passes two nkumbers, it should return false if only one

function quotient(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 / num2;
    }
    else{
        return false;
    }
}

console.log(quotient(8,"80"));

//Morning warmup, function that takes in an array that has a length of 5. console log each element of the array.
function printArray(array){
    for(var x = 0; x < array.length; x++){
        console.log(array[x]);
    }
}

printArray(["eduardo", "hello", "codeup", "class", "coding"]);

//function that takes in a floating point number, and returns a number rounded down. it should return false for
// all inputs that aren't numbers

function roundedFloating(number){
    if(typeof number === "number" && !isNaN(number)){
        return Math.floor(parseFloat(number));
    }else {
        return false;
    }
}

console.log(roundedFloating("45"));
console.log(roundedFloating([1, 2, 3, 4]));
console.log(roundedFloating(45));
console.log(roundedFloating(56.4));
console.log(roundedFloating(34.9));

//morning warmup, function that takes in an input and returns true if the input is a string, at least 8 characters in
//length, it should return false for all other input

function isAString(string){
    if(typeof string === "string" & string.length >= 8){
        return true;
    }
    else {
        return false;
    }
}

//Function that counts from 1 up to the number that the user passes in.

function countUp(num){
    for(var x = 1; x <= parseFloat(num); x++){
        console.log(x);
    }
    return "Done counting";
}

countUp(5);
countUp(30);


function createPersonObject(name, age){
    var person = {
        name: name,
        age: age
    }

    return person
}

console.log(createPersonObject("Eduardo", 33));

//MW 10/25/2019. Function that returns the number five but only when passed the string five

function returnFive(str){
    if(typeof  str === 'string' && str === "five"){
        return 5;
    }else{
        return false;
    }
}

console.log(returnFive(5));
console.log(returnFive("five"));
console.log(returnFive(true));

//10/28/19. Function that return shopping cars object with the most oranges
var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

function shoppingMostOranges(shopping){
    var most = shopping[0].oranges;
    var obj = {};

    shopping.forEach(function (fruit) {
        if(fruit.oranges > most){
            most = fruit.oranges;
            obj = fruit;
        }
    });

    return obj;
}

console.log(shoppingMostOranges(shoppingCarts));

//10/29/2019 Morning Warmup. Function that accepts an array of students objects and returns an
//array of student objects that are not regidstered to class.
var students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
];

function studentsNotRegistered(students){
    var studentsNotRegistered = [];

    students.forEach(function (student) {
        if(!student.isRegistered){
            studentsNotRegistered.push(student);
        }
    });

    return studentsNotRegistered;
}

console.log(studentsNotRegistered(students));

//10/30/2019. Morning Warmups. Write a javascript function that return a hamster a
//array object based on height in ascending order.
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function hamsterHeight (arr){
    return arr.sort(function (obj1, obj2) {
        return obj1.heightInMM - obj2.heightInMM;
    });
}

console.log(hamsterHeight(hamsters));

//11/02/2019..3 Favorite Web applications

//- Gas Buddy: find cheaper gas around where I am
//- Amazon -easy to shop
//- Netflix - easines to choose a show or movie

//11/04/2019. Java Function that will take in the whole numbers 1-10 and return the number spelled out as a string

function spelledNumbers(num){
    var spelled = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    return spelled[num];
}

console.log(spelledNumbers(8));
console.log(spelledNumbers(3));
console.log(spelledNumbers(1));

//11/05/2019. Write a function that will return 'Youre Welcome
//but only when passed a JS objects with a porprty of gratitude that has value
//thank you.

function welcome(obj){
    if (obj.gratitude.toLowerCase() === "thank you"){
        return "You are Welcome!!!";
    }
}

var hello = {
    gratitude: "THANK YOU"
};

console.log(welcome(hello));

//11/06/2019. functiom that returns a random boolean

function randomBoolean(){
    // let random = Math.floor(Math.random() * 1);
    //
    // if(random === 0 ){
    //     return false;
    // }
    // else if(random === 1){
    //     return true;
    // }

    return Boolean(Math.floor(Math.random() * 2));

}

console.log(randomBoolean());
console.log(randomBoolean());
console.log(randomBoolean());

//11/12/2019. Function that returns and array of all even numbers

function arrayEven(arr){
    let results = [];

    arr.forEach(function (num) {
        if(num % 2 === 0){
            results.push(num);
        }
    });

    return results;
}

console.log(arrayEven([1,2,3,4,5,6,7,8,9]));

//11/14/2019. Function that returns a promise. The promise should resolve if the
//function takes in an even number, and rejects if passed anything else.

// function evenPromise(num){
//     return new Promise((resolve, reject) =>{
//         if(num % 2 === 0){
//             resolve();
//         }else{
//             reject();
//         }
//     });
// }
// let request = evenPromise(9);
// request.then(() => console.log("its Even"));
// request.catch(() => console.log("Rejected"));

const evenPromise = num => {
    return new Promise((resolve, reject) =>{
        if(num % 2 ===0){
            resolve(`Why yes, the number ${num} is an even number`);
        }else{
            reject(`Woe is you. ${num} is not an even number`);
        }
    });
};

evenPromise(4).then(message => console.log(message))
    .catch(message => console.log(message));
evenPromise(9).then(message => console.log(message))
    .catch(message => console.log(message));

//11/15/2019. Function that returns a promise. It should resolve with a message of Hello. Write to the html doc an h1 that has
//the text of the resolve.

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        // if(resolve){
        //     return "Hello";
        // }else if(reject) {
        //     return "Error";
        // }
        resolve("Hello!");
    });
};

helloPromise().then(message =>{
    //$('body').html(`<h1>${message}</h1>`);
    document.getElementsByTagName('body')[0].innerHTML += `<h1>${message}</h1>`;
});
//sayHello().catch(message => console.log(message));

//11/18/2019. Function that returns PI to 6 decimal places as a number

// function retPiNum(){
//     return Math.PI.toPrecision(6);
// }
//
// console.log(retPiNum());

const piToSix = () => parseFloat(Math.PI.toFixed(6));

console.log(piToSix());