//Exercises from David's Javascript Bonuses
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