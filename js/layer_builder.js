var leaflet = require('leaflet');
require('leaflet-providers');

var markerBuilder = require('./marker_builder.js');

module.exports = {
  getDayLayers: getDayLayers,
  getNightLayers: getNightLayers,
  getLayerControl: getLayerControl
};

var dayTiles = _getDayTiles();
var nightTiles = _getNightTiles();

function getLayerControl() {
  return leaflet.control.layers(null, {
    'City Properties': cityGroup,
    'Retail': retailGroup,
    'Vacancies': vacancyGroup
  }, {
    collapsed: false,
    position: 'bottomright'
  });
}

function getDayLayers() {
  return leaflet.layerGroup(
    _getSharedLayers().concat(dayTiles));
}

function getNightLayers() {
  return leaflet.layerGroup(
    _getSharedLayers().concat(nightTiles));
}

function _getDayTiles() {
  return leaflet.layerGroup([
    leaflet.tileLayer.provider('OpenMapSurfer.Grayscale').setOpacity('0.7'),
    leaflet.tileLayer.provider('Thunderforest.Landscape').setOpacity('0.1')
  ]);
}

function _getNightTiles() {
  return leaflet.layerGroup([
    leaflet.tileLayer.provider('CartoDB.DarkMatterNoLabels'),
    leaflet.tileLayer.provider('OpenMapSurfer.Grayscale').setOpacity('0.1')
  ]);
}

function _getSharedLayers() {
  return [
    require('./data/streets.js'),
    require('./data/trains.js'),
    markerBuilder.getMarkers(),
  ];
}
