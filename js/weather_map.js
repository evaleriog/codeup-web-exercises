"use strict";
var address;

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 6,
});

map.setCenter([sanAntonioLongitude, sanAntonioLatitude]);

var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([sanAntonioLongitude, sanAntonioLatitude])
    .addTo(map);

function onDragEnd(){
    let lngLat = marker.getLngLat();
    let url = createWeatherURL(lngLat.lat, lngLat.lng);

    $('.card-columns').html("");
    weatherCity(url);

    reverseGeocode({lng: lngLat.lng, lat: lngLat.lat}, mapboxToken).then(function (results) {
        address = results.split(',');
        let r = "/\d+/";

        let city = address[address.length - 3];
        let state = address[address.length - 2].replace(/^(\w+)(\d{3})$/, " ");
        let country = address[address.length - 1];

        $('#place').text(city + ", " + state + ", " + country);
    });

}

marker.on('dragend', onDragEnd);