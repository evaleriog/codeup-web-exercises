"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert("Great, " + favColor + " is my favorite color too!");

// Exercise 3 section

//Movies Rental
var littleMermaid = parseInt(prompt("How many days you want to rent The Little Mermaid?"));
var brotherBear = parseInt(prompt("How many days you want to rent Brother Bear?"));
var hercules = parseInt(prompt("How many days you want to rent Hercules?"));
var moviePerDay = 3;

var totalRent = (littleMermaid + brotherBear + hercules) * moviePerDay;

alert("The total rent of your movies is " + totalRent);

//Contractor Pay Calculator
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleHours = parseInt(prompt("How many hours worked at Google?"));
var amazonHours = parseInt(prompt("How many hours worked at Amazon?"));
var facebookHours = parseInt(prompt("How many hours worked at Facebook?"));

var totalGoogle = googleHours * googleRate;
var totalAmazon = amazonHours * amazonRate;
var totalFacebook = facebookHours * facebookRate;

var totalPayment = totalGoogle + totalAmazon + totalFacebook;

alert("Total payment is " + totalPayment);

//Student class enrollment
var classTime = prompt("What is your current class time?");
var classSize = parseInt(prompt("What is the total class size?"));
var currentClassSize = parseInt(prompt("What is the current class size?"));
var myClass = prompt("What time is your current class?");

var canSignUp = (currentClassSize < classSize) && (classTime !== myClass);

alert("The result if the student can sign up is " + canSignUp);

//Discount
var productOfferExpired = confirm("Is the product offer Expired?");
var premium = confirm("Are you a Premium Member?");
var cartItems = parseInt(prompt("How many items do you have on your cart?"));

var canHaveDiscount = (productOfferExpired === false && (premium === true || cartItems > 2));

alert("The result of applying the discount is " + canHaveDiscount);