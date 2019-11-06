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
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let daysOfWeek = ["Sun", "Mon", "Tues", 'Wed', "Thu", "Fri", "Sat"];
    let dateObject = new Date(day.time * 1000);
    let dayOfWeek = dateObject.getUTCDay();
    let dayWeather = dateObject.getDate();
    let monthWeather = dateObject.getMonth();
    let yearWeather = dateObject.getFullYear();
    let newDate = daysOfWeek[dayOfWeek] + " " + months[monthWeather] + " " + dayWeather + ", " + yearWeather;
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

    let html = "<div class='today card mb-3'><div class='row no-gutters'><div class='col-md-4'>";
    html += "<img src='";
    html += imgSrc;
    html += "' class='card-img' alt=''>";
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
    html += newDate;
    html += "</small></p></div></div></div></div>";

    $('.card-columns').append(html);

}

function createWeatherURL(latitude, longitude){
    return "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
}
