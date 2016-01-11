var debug = true;

var leaflet = require('leaflet');
require('leaflet-providers');

var cityData = require('./data/city.js');
var retailData = require('./data/retail.js');
var vacancyData = require('./data/vacancies.js');

var blackAndWhiteLayer = leaflet.tileLayer.provider('OpenStreetMap.BlackAndWhite');
var grayScaleLayer = leaflet.tileLayer.provider('OpenMapSurfer.Grayscale');

var map = leaflet.map('map-container', {
  center: [
    42.01973653474977,
    -87.67045319080353
  ],
  dragging: false,
  layers: [
    grayScaleLayer,
    require('./data/streets.js'),
    cityData,
    retailData,
    vacancyData
  ],
  zoom: 18,
  zoomControl: false
});

leaflet.control.layers(null, {
  'City Properties': cityData,
  'Retail': retailData,
  'Vacancies': vacancyData
}).addTo(map);

module.exports = map;

if (debug) {
  leaflet.control.layers({
    'Black and White': blackAndWhiteLayer,
    'Grayscale': grayScaleLayer
  }).addTo(map);

  var debugMarker = leaflet.circleMarker(leaflet.latLng(0, 0), {
    daggable: true,
    radius: 4,
    color: 'black',
    fillColor: 'black',
    fillOpacity: 1
  }).addTo(map);

  map.on('click', function(event) {
    console.log('location', event.latlng);
    debugMarker.setLatLng(
      leaflet.latLng(event.latlng.lat, event.latlng.lng));
  });
}
