var leaflet = require('leaflet');
require('leaflet-providers');

var cityData = require('./data/city.js');
var retailData = require('./data/retail.js');
var vacancyData = require('./data/vacancies.js');

module.exports = {
  getLayers: getLayers,
  getLayerControl: getLayerControl
};

function getLayerControl() {
  return leaflet.control.layers(null, {
    'City Properties': cityData,
    'Retail': retailData,
    'Vacancies': vacancyData
  }, {
    collapsed: false,
    position: 'bottomright'  
  });
}

function getLayers() {
  return getPoints().
    concat([require('./data/streets.js')]).
    concat(getMapTiles());
}

function getPoints() {
  return [
    cityData,
    retailData,
    vacancyData
  ];
}

function getMapTiles() {
  var blackAndWhiteLayer = leaflet.tileLayer.provider('Thunderforest.Landscape');
  blackAndWhiteLayer.setOpacity('0.1');

  var grayScaleLayer = leaflet.tileLayer.provider('OpenMapSurfer.Grayscale');
  grayScaleLayer.setOpacity('0.7');

  return [blackAndWhiteLayer, grayScaleLayer];
}
