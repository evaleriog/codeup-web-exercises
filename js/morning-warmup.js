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