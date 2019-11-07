"use strict";

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();

mapboxgl.accessToken = mapboxToken;

//creates a new map with initial zoom and style
var map = new mapboxgl.Map({
    container: 'map',
    zoom: 6,
});

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

if((hour >= 6 && hour <= 18)&&(minutes >= 1)){
    map.setStyle('mapbox://styles/mapbox/navigation-preview-day-v2');
}else if(((hour >= 18 && hour <= 24) || (hour >= 0 && hour < 6))&&(minutes >= 1)){
    map.setStyle('mapbox://styles/mapbox/navigation-preview-night-v2');
    $('#container').css("background-color","#7E9921");
}
//sets initial center to San Antonio, TX
map.setCenter([sanAntonioLongitude, sanAntonioLatitude]);

//creates a draggable marker set in San Antonio, TX
var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([sanAntonioLongitude, sanAntonioLatitude])
    .addTo(map);

//function that when the marker is dragged and release, gets the coordinates and display the new information
//and changes the information on the website
function onDragEnd(){
    let lngLat = marker.getLngLat();
    globalURL = createWeatherURL(lngLat.lat, lngLat.lng);

    //empty html display to add cards
    $('.card-columns').html("");
    weatherCity(globalURL, forecast, forecastSelector);
    changeCity(lngLat.lng, lngLat.lat);
}

//set function onDragEnd to marker
marker.on('dragend', onDragEnd);

//when Search button is clicked on the map, searches for the new place and displays the information
$('#search').click(function (e) {
    e.preventDefault();

    let searchPlace = $('#place_search').val();

    if (searchPlace !== ""){
        //geocode function to get longitud and latitud of searched place.
        geocode(searchPlace, mapboxToken).then(function (result) {
            let longitud = result[0];
            let latitude = result[1];
            //create a new URL for the new place
            globalURL = createWeatherURL(latitude, longitud);
            //empty html display to add cards
            $('.card-columns').html("");
            //display the new information on website
            weatherCity(globalURL, forecast, forecastSelector);
            changeCity(longitud, latitude);

            //set both marker and map center to place searched
            marker.setLngLat(result);
            marker.addTo(map);
            map.setCenter(result);
        });
    }
});

//function to change the name of city, state, and country on the jumbotron
function changeCity(long, lat){
    let address;
    //use reverse geocode function to get and address object from Mapbox
    reverseGeocode({lng: long, lat: lat}, mapboxToken).then(function (results) {
        address = results;

        let city = "";
        let state = "";
        let country = "";

        //check for the object array ids to look for city, state and country.
        address.features.forEach(function (place) {
            let id = place.id;
            id = id.substring(0, id.indexOf("."));
            let address = place;

            if(id === "place"){
                city = address.text;
            }else if(id === "region"){
                state = address.text;
            }else if(id === "country"){
                country = address.text;
            }
        });

        let html = "<span class='badge-pill badge-light text-secondary'>" + city + "</span>";
        html += "<span class='badge-pill badge-light text-dark'>" + state + "</span>";
        html += "<span class='badge-pill badge-light text-success'>" + country + "</span>";

        //change the text in the jumbotron
        $('#place').html("");
        $('#place').append(html);
    });
}

//event handler for the zoom range on map to change the map zoom as drag
$(document).on('input change', '#formControlRange', function () {
    map.setZoom($('#formControlRange').val());
});

$(document).keyup(function (event) {
    let key = event.which;

    if(key === 13){
        $('#search').trigger('click');
    }
});