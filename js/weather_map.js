"use strict";
var address;
var date = new Date();

console.log(date);

mapboxgl.accessToken = mapboxToken;

//creates a new map with initial zoom and style
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 6,
});

//adds navigation control on the bottom right on the map
map.addControl(new mapboxgl.NavigationControl(),"bottom-right");
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
    let url = createWeatherURL(lngLat.lat, lngLat.lng);

    $('.card-columns').html("");
    weatherCity(url);
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
            let cityURL = createWeatherURL(latitude, longitud);
            //display the new information on website
            $('.card-columns').html("");
            weatherCity(cityURL);
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

        //change the text in the jumbotron
        $('#place').text(city + ", " + state + ", " + country);
    });
}

//event handler for the zoom range on map to change the map zoom as drag
$(document).on('input change', '#formControlRange', function () {
    map.setZoom($('#formControlRange').val());
});