var leaflet = require('leaflet');
require('leaflet-providers');

var markerBuilder = require('./marker_builder.js');

module.exports = {
  getDayTiles: getDayTiles,
  getNightTiles: getNightTiles,
  getLayerControl: getLayerControl
};

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

function getDayTiles() {
  return leaflet.layerGroup([
    leaflet.tileLayer.provider('OpenMapSurfer.Grayscale').setOpacity('0.7'),
    leaflet.tileLayer.provider('Thunderforest.Landscape').setOpacity('0.1')
  ]);
}

function getNightTiles() {
  return leaflet.layerGroup([
    leaflet.tileLayer.provider('CartoDB.DarkMatterNoLabels'),
    leaflet.tileLayer.provider('OpenMapSurfer.Grayscale').setOpacity('0.1')
  ]);
}
