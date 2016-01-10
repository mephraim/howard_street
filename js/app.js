var data = require('./data.js');
var leaflet = require('leaflet');
leaflet.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

var container = document.getElementById('map-container');

var tiles = leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var map = leaflet.map('map-container', {
  center: [
    42.019274237944636,
    -87.67036736011505
  ],
  layers: [tiles],
  zoom: 18
});

data.addresses.forEach(function(address) {
  var circle = leaflet.circleMarker(
    L.latLng(address.lat, address.lng), {
      radius: 4,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.8
  }).bindPopup(address.address).addTo(map);
});

map.on('click', function(event) {
  console.log('latlng', event.latlng);
});
