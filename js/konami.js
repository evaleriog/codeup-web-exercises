"use strict";

var KonamiCode = [38,38,40,40,37,39,37,39,66,65];
var marioCode = [38,38,40,40,37,39,37,39, 66,90];
var input = [];

//erase all user input when shift and one is pressed
$(document).keydown(function (event) {
    if(event.which === 49 && event.shiftKey){
        $('#keys_pressed').html(" ");
        input = [];
    }
});

$(document).keyup(function(event){
    var key = event.which;

    //check if user pressed a letter or arrow keys
    if((key >= 37 && key <=40) || (key >= 65 && key <= 90)){

        //after pressed play a sound
        var audio = new Audio('img/press.wav');
        audio.play();

        //push key code into array to get sequence of pressed keys
        input.push(key);

        //create variable and get back the letter pressed based on the key
        var pressed = convertKey(key);

        //based if key pressed is letter or arrow key, add a span with appropiate class.
        if(pressed === 'up' || pressed === 'down' || pressed === 'right' || pressed === 'left'){
            $('#keys_pressed').append('<span class="start-btn">' + pressed + '</span>')
        }
        else {
            $('#keys_pressed').append('<span class="video-game-button">' + pressed + '</span>');
        }


    }
    //check if the return key was pressed
    else if(key === 13){

        //compare user input keys array with Konami combo
        if(compareArrays(input, KonamiCode)){
            //sets fadein and fadeout of picture
            $('#konami').fadeIn(2000).delay(13000).fadeOut(3000);

            //increment the number of lives to 30 with coin sound every half second.
            var lives = 4;
            var increment = setInterval(function () {
                if(lives <= 30){
                    var audio = new Audio('img/coin.wav');
                    audio.play();
                    $('#lives').text(lives.toString());
                    lives++;
                }else {
                    clearInterval(increment);
                }

            },500);

            //set a timeout to erase display of keys pressed after all animation
            setTimeout(function () {
                $('#keys_pressed').html(" ");
            }, 18000);

        }
        //check if the user input codes are the same as mario
        else if(compareArrays(input, marioCode)){

            //display mario animation
            $('#mario').fadeIn(2000).delay(2000).fadeOut(3000);

            //set a timeout to erase display of keys pressed after all animation
            setTimeout(function () {
                $('#keys_pressed').html(" ");
            }, 7000);
        }
        //if user input did not matched any codes, display video of duck hunt dog
        else {
            $('#incorrect').fadeIn(2000).html('<iframe class="video" src="https://www.youtube.com/embed/7fkgjgBJKzk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                .delay(1000).fadeOut(3000);

            //set a timeout to erase display of keys pressed after all animation
            setTimeout(function () {
                $('#keys_pressed').html(" ");
            }, 5000);
        }
        //erase all content in the user input to start again
        input = [];
    }

});

//function to compare if two arrays are equal
function compareArrays(arr1, arr2){
    if(JSON.stringify(arr1) == JSON.stringify(arr2)){
        return true;
    }
    else{
        return false;
    }
}

//function to convert numeric key to the actual letter pressed by user
function convertKey(key){
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','up','down','right','left'];
    var code = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,38,40,39,37];
    var result = " ";

    code.forEach(function (number, index) {
        if(number === key){
            result =  letters[index];
        }
    });

    return result;
}
