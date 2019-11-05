"use strict";
var sanAntonioLatitude = 29.424349;
var sanAntonioLongitude = -98.491142;
var sanAntonioURL = createWeatherURL(sanAntonioLatitude, sanAntonioLongitude);

var sanAntonioWeather = $.ajax(sanAntonioURL).done(function (data) {
    console.log(data);
    for(var x = 0; x < 3; x++){

        var day = data.daily.data[x];
        var path = '';

        switch (x) {
            case 0:
                path = '.today';
                displayWeather(day, path);
                break;
            case 1:
                path = '.tomorrow';
               displayWeather(day, path);
                break;
            case 2:
                path = '.after_tomorrow';
                displayWeather(day, path);
                break;

        }

    }

}).fail(function () {
    console.log("Connection to the API not working...");
});

function displayWeather(day, path){
    var thePath = path;

    var html = "<span>";
    html += Math.round(day.temperatureHigh);
    html += "\xB0 / ";
    html += Math.round(day.temperatureLow);
    html += "\xB0</span>"
    path += ' .temperature' ;
    $(path).html(html);

    html = "Summary: <span>";
    html += day.summary;
    html += "</span>";
    path = thePath + ' .summary';
    $(path).html(html);

    html = "Humidity: <span>";
    html += day.humidity;
    html += "</span>";
    path = thePath + ' .humidity';
    $(path).html(html);

    html = "Wind: <span>";
    html += day.windSpeed;
    html += "</span>";
    path = thePath + ' .wind';
    $(path).html(html);

    var dateObject = new Date(day.time * 1000);
    html = "<p>" + dateObject + "</p>";
    path = thePath + ' .date';
    $(path).html(html);
}

function createWeatherURL(latitude, longitude){
    return "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
}