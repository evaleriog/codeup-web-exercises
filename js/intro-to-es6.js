"use strict";

/*********************************************
 *              EXPONENTIATION
 ******************************************** */
// TO DO: We know that the old JS syntax uses this:
//     >> Math.pow(a,b)
//     Using the ES6 exponentiation Operator, refactor the following:


// var x = Math.pow(4,5);
var x = 4 ** 5;
console.log(x);

let random = Math.floor(Math.random() * (Math.pow(2,3)));
// console.log(random);


/*********************************************
 *              let and const
 ******************************************** */
random = Math.floor(Math.random() * x);
// console.log(random);

// TO DO: Refactor everything above to use es6 variable types.
//     What happens when you change the 'random' variable to a const?

// Why does this happen and how do we fix this behavior?

// TO DO TOGETHER: change the var keyword to const. What do you see in
// the console? Now change it to let and try again.

let sayHello = "Hello World!";

sayHello = "Hello Deimos!";

console.log(sayHello);


    // TO DO: change var i into let. What are your results?

var numbers = [1,2,3,4,5];

for(let i = 0; i < numbers.length; i++){
    console.log(i);
}
// console.log(i);

/*********************************************
 *              for ... of
 ******************************************** */
    // TO DO TOGETHER: using a for...of loop, console log each element in
    // the array.
// const myArray = ["it", "is", "really", "cold", "outside"];

// for(let element of myArray){
//     console.log(element);
// }

//TO DO: using a for ... of loop, iterate over the array of instructors. If
// the instructor is Sophie or David, console log the name.

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
];

const [a,b,c,d] = instructors;

const europaInstructors = [a,b];
const deimosInstrcutors = [c,c];

console.log(a);
console.log(b);
console.log(europaInstructors);
console.log(deimosInstrcutors);

// for(let instructor of instructors){
//     if(instructor === "Sophie" || instructor === "David"){
//         console.log(instructor);
//     }
// }

// var myArray = [1,2,3,4,5,6,7,8,9];
//
// function evenNumbers(arr) {
//     let newArray = [];
//
//     for(let number of arr){
//         if(number % 2 === 0){
//             newArray.push(number);
//         }
//     }
//
//     return newArray;
// }
//
// console.log(evenNumbers(myArray));


/*********************************************
 *              Arrow Functions
 ******************************************** */

// TO DO TOGETHER: refactor this into an arrow function. Be as concise as
// possible.

// function add(a,b){
//     return a + b;
// }
//
// const add = (a, b) => {
//     return a + b;
// }
//
// function square (x){
//     return x * x;
// }
//
// const square = x => x * x;

// TO DO TOGETHER: refactor the following so that variable 'greeting' has a
// default value of 'Good Morning' and 'name' has the value of 'Deimos.
// 
//      Check your work.

const myGreeting = (greeting = "Good Morning ",name = "Deimos") => {
    return `${greeting},${name}`;
};

console.log(myGreeting());
console.log(myGreeting("Hello", "Sophie"));

/*********************************************
 *              Objects
 ******************************************** */
    
// TO DO: Refactor the Object below to use shorthand property assignment

const mydog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog: mydog,
    cat: cat,
    mouse: mouse
};

// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
// const {dog, cat, mouse} = pals;
//
// console.log(dog);
// console.log(cat);
// console.log(mouse);

// TO DO TOGETHER: Use Object Destructuring to refactor

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};

// const carInfo = (car) => {
//     var make = car.make;
//     var model = car.model;
// };

const carInfo = ({make, model}) => {
    console.log("here is you car info: ");
    console.log(make, model);
};
carInfo(myCar);

//BONUS: Array Destructuring.

