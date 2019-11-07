"use strict";

//constant variables to set initial application to San Antonio, TX
const sanAntonioLatitude = 29.424349;
const sanAntonioLongitude = -98.491142;
const sanAntonioURL = createWeatherURL(sanAntonioLatitude, sanAntonioLongitude);

//event handler to display loading animations while API is connecting
$(document).ajaxSend(function () {
    let html = "<div class='loaders mb-3'><div class='loader'></div><div class='loader'></div><div class='loader'></div></div>";
    $('.card-columns').append(html);
    $('.loaders').css("display", "flex");
});
//event handler to set display to none to loading animations after the API is already connected
$(document).ajaxComplete(function (requestName) {
    $('.loaders').css("display", "none");
});

//function that gets the forecast and displays the information on application
function weatherCity(url, arr, selector){
    arr = [];
    let lookWeather = $.ajax(url).done(function (data, status, jqXhr) {
        console.log(data);

        //create a card for each forecast day and push it into forecast array
        data.daily.data.forEach(function (forecast) {
            arr.push(displayWeather(forecast));
        });

        //display cards depending on forecast day selector
        for(let x = 0; x < selector; x++){
            $('.card-columns').append(arr[x]);
        }
        //call function to change the background
        changeBackground(data);

    }).fail(function () {
        console.log("Connection to the API not working...");
    });

}

//function to change the background of jumbotron based on the current city weather
function changeBackground(day){
    let rightNow = day.currently;
    let temperature = Math.round(rightNow.temperature);
    let icon = rightNow.icon;
    let imgURL = "./icon/";

    switch (icon) {
        case "clear-day":
            imgURL += "clear-day.gif";
            break;
        case "clear-night":
            imgURL += "clear-night.gif";
            break;
        case "rain":
            imgURL += "rain.gif";
            break;
        case "snow":
            imgURL += "snow.gif";
            break;
        case "sleet":
            imgURL += "sleet.gif";
            break;
        case "wind":
            imgURL += "wind.gif";
            break;
        case "fog":
            imgURL += "fog.gif";
            break;
        case "cloudy":
            imgURL += "cloudy.gif";
            break;
        case "partly-cloudy-day":
            imgURL += "partly-cloudy-day.gif";
            break;
        case "partly-cloudy-night":
            imgURL += "partly-cloudy-night.gif";
            break;
        case "hail":
            imgURL += "hail.gif";
            break;
        case "thunderstorm":
            imgURL += "thunderstorm.gif";
            break;
        default:
            imgURL += "clear-day.gif";
            break;
    }
    let urlImg = 'url(' + imgURL + ')';

    $('.jumbotron').css('background-image', urlImg);
    $('#current_temperature').text(temperature + "\xB0");

    console.log(icon);
}

//function to create and display cards with weather information
function displayWeather(day){

    //section to set the date provided in the format desired
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let daysOfWeek = ["Sun", "Mon", "Tues", 'Wed', "Thu", "Fri", "Sat"];
    let dateObject = new Date(day.time * 1000);
    let dayOfWeek = dateObject.getUTCDay();
    let dayWeather = dateObject.getDate();
    let monthWeather = dateObject.getMonth();
    let yearWeather = dateObject.getFullYear();
    let newDate = daysOfWeek[dayOfWeek] + " " + months[monthWeather] + " " + dayWeather + ", " + yearWeather;
    //variable to set icon according to summary of weather
    let imgSrc = "./icon/";

    switch (day.icon) {
        case "clear-day":
            imgSrc += "Sun.svg";
            break;
        case "clear-night":
            imgSrc += "Moon-Full.svg";
            break;
        case "rain":
            imgSrc += "Cloud-Rain.svg";
            break;
        case "snow":
            imgSrc += "Cloud-Snow.svg";
            break;
        case "sleet":
            imgSrc += "Cloud-Drizzle-Alt.svg";
            break;
        case "wind":
            imgSrc += "Wind.svg";
            break;
        case "fog":
            imgSrc += "Cloud-Fog.svg";
            break;
        case "cloudy":
            imgSrc += "Cloud.svg";
            break;
        case "partly-cloudy-day":
            imgSrc += "Cloud-Sun.svg";
            break;
        case "partly-cloudy-night":
            imgSrc += "Cloud-Moon.svg";
            break;
        case "hail":
            imgSrc += "Cloud-Hail-Alt.svg";
            break;
        case "thunderstorm":
            imgSrc += "Cloud-Lightning.svg";
            break;
        case "tornado":
            imgSrc += "Tornado.svg";
            break;
    }

    //creates card for each day of weather information
    let html = "<div class='forecast card bg-light border-dark mb-3'><div class='row no-gutters'><div class='col-md-4'>";
    html += "<img src='";
    html += imgSrc;
    html += "' class='card-img' alt=''>";
    html += "</div><div class='col-md-8'><div class='card-body'>";
    html += "<h5 class='card-title temperature text-primary'>";
    html += Math.round(day.temperatureHigh);
    html += "\xB0 / ";
    html += Math.round(day.temperatureLow);
    html += "\xB0";
    html += "</h5><p class='card-text summary'>";
    html += "Summary: <span>";
    html += day.summary;
    html += "</span>";
    html += "</p><p class='card-text humidity'>";
    html += "Humidity: <span>";
    html += day.humidity;
    html += "</span></p><p class='card-text wind'>";
    html += "Wind: <span>";
    html += day.windSpeed;
    html += "</span></p><p class='card-text'><small class='text-muted date'>";
    html += newDate;
    html += "</small></p></div></div></div></div>";

    return html;

}

//function to create an URL and sebd a GET to Weather API
function createWeatherURL(latitude, longitude){
    return "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
}

//changes the global variables of forecast selector as changed in select element
$('#forecastDaysSelector').on('change',function () {
    forecastSelector = this.value;
    $('.card-columns').html("");
    weatherCity(globalURL, forecast, forecastSelector);
});