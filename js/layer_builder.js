var leaflet = require('leaflet');
require('leaflet-providers');

var cityGroup =
  getMarkerGroupFromData(require('./data/city.js'));

var retailGroup =
  getMarkerGroupFromData(require('./data/retail.js'));

var vacancyGroup =
  getMarkerGroupFromData(require('./data/vacancies.js'));

var dayTiles = getDayTiles();
var nightTiles = getNightTiles();

module.exports = {
  getLayers: getLayers,
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

function getLayers() {
  return [
    require('./data/streets.js'),
    require('./data/trains.js'),
    cityGroup,
    retailGroup,
    vacancyGroup,
  ].concat(dayTiles);
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

function getMarkerGroupFromData(data) {
  return leaflet.layerGroup(data.addresses.map(function(address) {
    return getMarkerFromAddress(address, {
      color: data.color,
      fillColor: data.fillColor
    });
  }));
}

function getMarkerFromAddress(address, options) {
  return leaflet.circleMarker(
    leaflet.latLng(address.lat, address.lng), {
      radius: 4,
      color: options.color,
      fillColor: options.fillColor,
      fillOpacity: 0.8
  }).bindPopup(address.name + '<br>' + address.address);
}
