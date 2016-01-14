var leaflet = require('leaflet');
require('leaflet-providers');

var cityGroup =
  getMarkerGroupFromData(require('./data/city.js'), {
    color: 'blue',
    fillColor: '#56BFDA'
  });

var ctaGroup =
  getMarkerGroupFromData(require('./data/cta_retail.js'), {
    color: 'red',
    fillColor: '#f03'
  });

var groceryGroup =
  getMarkerGroupFromData(require('./data/grocery.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });

var entertainmentGroup =
  getMarkerGroupFromData(require('./data/entertainment.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });

var retailGroup =
  getMarkerGroupFromData(require('./data/retail.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });

var restaurantGroup =
  getMarkerGroupFromData(require('./data/restaurants.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });

var otherGroup =
  getMarkerGroupFromData(require('./data/other.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });

var vacancyGroup =
  getMarkerGroupFromData(require('./data/vacancies.js'), {
    color: 'red',
    fillColor: '#f03',
  });

var dayTiles = getDayTiles();
var nightTiles = getNightTiles();

module.exports = {
  getDayLayers: getDayLayers,
  getNightLayers: getNightLayers,
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

function getSharedLayers() {
  return [
    require('./data/streets.js'),
    require('./data/trains.js'),
    cityGroup,
    ctaGroup,
    groceryGroup,
    retailGroup,
    restaurantGroup,
    vacancyGroup
  ];
}

function getDayLayers() {
  return leaflet.layerGroup(
    getSharedLayers().concat(dayTiles));
}

function getNightLayers() {
  return leaflet.layerGroup(
    getSharedLayers().concat(nightTiles));
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

function getMarkerGroupFromData(data, options) {
  return leaflet.layerGroup(data.addresses.map(function(address) {
    return getMarkerFromAddress(address, {
      color: options.color,
      fillColor: options.fillColor
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
