"use strict";
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
    var lngLat = marker.getLngLat();
    console.log("Longitude: " + lngLat.lng + "  Latitue: " + lngLat.lat);
}

marker.on('dragend', onDragEnd);