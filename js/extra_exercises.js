//Exercises from David's Javascript Bonuses
//Counting the Number of Characters
var name = prompt("What is the input string?");

function charCount(string){
    if(string === ""){
        alert("Please enter a name");
    }
    else{
        return string.length;
    }
}

alert(name + " has " + charCount(name) + " characters.");

//Mad Lib
var noun = prompt("Enter a noun: ");
var verb = prompt("Enter a verb: ");
var adjective = prompt("Enter an adjective: ");
var adverb =  prompt("Enter an adverb: ");

alert("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That's awesome");

//Area of rectangular room
var length = parseFloat(prompt("What is the length of the room in feet?"));
var width = parseFloat(prompt("What is the width of the room in feet?"));
alert("You entered dimensions of " + length.toString() + " feet by " + width.toString() + " feet");

var area = length * width;
var conversionFactor = 0.09290304;
var areaMeters = area * conversionFactor;
alert("The area is " + area + " square feet");
alert(areaMeters.toFixed(3) + " square meters");

//Pizza Party
var people = parseInt(prompt("How many people?"));
var pizzas = parseInt(prompt("How many pizzas?"));
var slicesPerPizza = parseInt(prompt("How many slices per pizza?"));
alert(people + " people with " + pizzas + " pizzas");
var totalSlices = pizzas * slicesPerPizza;

var slicesPerPeople = totalSlices / people;
var extraSlices = totalSlices % people;
alert("Each person get " + slicesPerPeople.toFixed(0) + " slices of pizza. There are " + extraSlices + " leftover pieces");

//Paint Calculator
var length = parseFloat(prompt("What is the length of the room in feet?"));
var width = parseFloat(prompt("What is the width of the room in feet?"));
var area = length * width;
var gallons = Math.ceil(area / 350);
alert("You will need to purchase " + gallons + " gallons of paint to cover " + area + " square feet.");

//Currency Conversion
var euros = parseFloat(prompt("How many euros do you have?"));
var rate = parseFloat(prompt("What is the current exchange rate for buying?"));

var dollars = euros * rate;

alert("For " + euros.toString() + " euros, you get $" + dollars.toFixed(2) +".");

//Compute Simple Interest
var principal = parseFloat(prompt("Enter the principal: "));
var rate = parseFloat(prompt("Enter the rate of interest: "));
var years = parseInt(prompt("Enter the number of years: "));

var simpleInterest = principal*(1 + ((rate/100)*years));
alert("After " + years + " years at " + rate + "%, the investment will be worth $" + simpleInterest);


//Calculating compound interest
var principal = parseFloat(prompt("What is the principal amount? "));
var rate = parseFloat(prompt("What is the rate?"));
var years = parseInt(prompt("What is the number of years? "));
var times = parseInt(prompt("What is the number of times the interest is compunded per year? "));

var rateHundred = rate / 100;

var compound = principal * Math.pow( (1 + (rateHundred/times)),times*years);

alert("$" + principal + " invested at " + rate + "% for " + years + " years compunded "
+ times + " times per year is $" + compound.toFixed(2));

