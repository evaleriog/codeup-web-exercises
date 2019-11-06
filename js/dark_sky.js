"use strict";
const sanAntonioLatitude = 29.424349;
const sanAntonioLongitude = -98.491142;
const sanAntonioURL = createWeatherURL(sanAntonioLatitude, sanAntonioLongitude);

weatherCity(sanAntonioURL);

function weatherCity(url){
    $.ajax(url).done(function (data) {
        console.log(data);

        for(let x = 0; x < 3; x++) {

            let day = data.daily.data[x];

            displayWeather(day);
        }
    }).fail(function () {
        console.log("Connection to the API not working...");
    });
}

function displayWeather(day){
    let dateObject = new Date(day.time * 1000);

    let html = "<div class='today card mb-3'><div class='row no-gutters'><div class='col-md-4'>";
    html += "<img src='' class='card-img' alt=''>";
    html += "</div><div class='col-md-8'><div class='card-body'>";
    html += "<h5 class='card-title temperature'>";
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
    html += dateObject;
    html += "</small></p></div></div></div></div>";

    $('.card-columns').append(html);

}

function createWeatherURL(latitude, longitude){
    return "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
}