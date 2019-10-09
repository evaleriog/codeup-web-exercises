"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin){
//     //show specific navbar
//}
//Together: Send a 20% off coupon if its users birthday

// if(isBirthday){
//     //send 20% off bday email
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = false;
// if(isRainy){
//     alert("It's raining");
// }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost < currentBalance){
//     alert("You have enough money");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("It's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
//
// if(numberInput > 10){
//     alert("It's true");
// }



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

function checkLives(lives){
    if(lives === 0){
        return "Sorry, game over";
    }
}

function checkWeather(weather){
    if(weather === "snowing"){
        return "It's snowing!";
    }
}

function checkGreaterTen(number){
    if(numberInput > 10){
        return "It's true";
    }
}

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if(isAdmin){
//     //show admin navbar
//     alert("User is admin!");
// }
// else{
//     //show other navbar
//     alert("User is a regular user");
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = false;
//
// if(isRainy){
//     alert("It's raining!");
// }
// else {
//     alert("have a nice day!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 2;
//
// if(numberOfLives === 0 ){
//     alert("Sorry, game over");
// }
// else{
//     alert("Next level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "windy";
//
// if(weather === "snowing"){
//     alert("It's snowing");
// }
// else {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 9;
//
// if(numberInput > 10){
//     alert("true");
// }
// else {
//     alert("number is less than ten");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(lives){
//     if(lives === 0 ){
//         return "Sorry, game over";
//     }
//     else{
//         return "Next level!";
//     }
// }

// console.log(checkIfGameIsOver(2));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// function checkWeather(weather){
//     if(weather === "snowing"){
//         return "It's snowing";
//     }
//     else {
//         return "Check back later for more details!";
//     }
// }
//
// alert(checkWeather("windy"));
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = confirm("Are you REALLY 13 yrs or older????");
//
// if(age === true){
//     alert("You may proceed");
// }
// else{
//     alert("Sorry, you are not able to proceed");
// }


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "windy";
//
// if(weather === "snowing"){
//     alert("Its snowing");
// }else if(weather === "raining") {
//     alert("its raining");
// }else if(weather === "sunny"){
//     alert("its sunny");
// }else {
//     alert("have a nice day");
// }

//Together: refactor the above statement as a function

// function checkWeather(weather){
//     var message;
//
//     if(weather === "snowing"){
//         message = "Its snowing";
//     }else if(weather === "raining") {
//         message = "its raining";
//     }else if(weather === "sunny"){
//         message = "its sunny";
//     }else {
//         message = "have a nice day";
//     }
//
//     return message;
// }
//
// console.log(checkWeather("sunny"));

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function checktrafficLight (color){
    var message;

    if (color === "green"){
        message = "Keep going!";
    }
    else if(color === "yellow"){
        message = "accelerate!";
    }else if(color === "red"){
        message = "stop";
    }
    else {
        message = "proceed with caution";
    }

    return message;
}

console.log(checktrafficLight("yellow"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age.
// If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not eligible for a license.

// var age = 16;
// var hasPermit = false;
//
// if(age < 15){
//     alert("Sorry your not elegible for a permit");
// }else {
//     if(age === 15){
//         alert("you can have a permit! yay!");
//     }else if(age >= 16 && hasPermit){
//         alert("You can have a license");
//     }else if(age >= 16 && !hasPermit){
//         alert("Sorry you need a permit first");
//     }
// }






// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weatherMessage = (weather === "rainy")?"Its raining" :"have a nice day";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weather = "rainy";
//
// switch(weather){
//     case "rainy":
//         alert("Its raining");
//         break;
//     case "sunny":
//         alert("Its sunny");
//         break;
//     case "snow":
//         alert("its snowing");
//         break;
//     default:
//         alert("Have a nice day!");
//         break;
// }

//TODO: Rewrite the intersection function from earlier as a switch statement.

function checkTrafficLight(trafficLight){
    switch (trafficLight) {
        case "green":
            return "Keep going";
        case "yellow":
            return "Go faster";
        case "red":
            return "Stop";
        default:
            return "Precaution";
    }
}

console.log(checkTrafficLight("yellow"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//
// //user select from a checkbox if shopping has been done
// var shoppping = true;
// var childAllowance;
//
// //if user selects the shopping has been done (click the checkbox)
// if(shoppping){
//     childAllowance = 10;
//     //allowance is $10 and displays child has earned 5 this week
// }
// //if user does not select or click the checkbox
// else {
//     childAllowance = 5;
//     //allowance is $5 and displays child has earned 10 this week
// }
//
// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//
// //user selects from a select statement options
// var weather = "rainy";
//
// switch(weather){
//     case "rainy":
//         alert("Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long");
//         break;
//     case "sunny":
//         alert("It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream");
//         break;
//     case "snowing":
//         alert("The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman");
//         break;
//     default:
//         alert("It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.");
//         break;
// }
//
// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//
// //user select from a select option white or black
// var theme = "white";
// var background;
// var color;
//
// //if user selects white
// if(theme === 'white'){
//     //background of site changes to white and font color to black
//     background = "white";
//     color = "black";
// }
// //if user selects black
// else {
//     //backgrounf of site changes to black and font color to white
//     background = "black";
//     color = "white";
//}