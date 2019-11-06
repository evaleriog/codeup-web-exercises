"use strict";
var address;

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 6,
});

map.addControl(new mapboxgl.NavigationControl(),"bottom-right");
map.setCenter([sanAntonioLongitude, sanAntonioLatitude]);

var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([sanAntonioLongitude, sanAntonioLatitude])
    .addTo(map);

function onDragEnd(){
    let lngLat = marker.getLngLat();
    let url = createWeatherURL(lngLat.lat, lngLat.lng);

    $('.card-columns').html("");
    weatherCity(url);
    changeCity(lngLat.lng, lngLat.lat);
}

marker.on('dragend', onDragEnd);

$('#search').click(function (e) {
    e.preventDefault();

    let searchPlace = $('#place_search').val();

    if (searchPlace !== ""){
        geocode(searchPlace, mapboxToken).then(function (result) {
            let longitud = result[0];
            let latitude = result[1];
            let cityURL = createWeatherURL(latitude, longitud);
            $('.card-columns').html("");
            weatherCity(cityURL);
            changeCity(longitud, latitude);

            marker.setLngLat(result);
            marker.addTo(map);
            map.setCenter(result);
        });
    }
});

function changeCity(long, lat){
    reverseGeocode({lng: long, lat: lat}, mapboxToken).then(function (results) {
        address = results;

        let city = "";
        let state = "";
        let country = "";

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


        $('#place').text(city + ", " + state + ", " + country);
    });
}

$(document).on('input change', '#formControlRange', function () {
    map.setZoom($('#formControlRange').val());
});