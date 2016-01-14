var leaflet = require('leaflet');

module.exports = {
  getMarkers: getMarkers
};

function getMarkers(isDay) {
  return leaflet.layerGroup([
    _getCityGroup(isDay),
    _getCtaGroup(isDay),
    _getGroceryGroup(isDay),
    _getRetailGroup(isDay),
    _getRestaurantGroup(isDay),
    _getVacancyGroup(isDay)
  ]);
}

function _getCityGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/city.js'), {
    color: 'blue',
    fillColor: '#56BFDA'
  });
}

function _getCtaGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/cta_retail.js'), {
    color: 'red',
    fillColor: '#f03'
  });
}

function _getGroceryGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/grocery.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });
}

function _getEntertainmentGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/entertainment.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });
}

function _getRetailGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/retail.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });
}

function _getRestaurantGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/restaurants.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });
}

function _getOtherGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/other.js'), {
    color: 'green',
    fillColor: '#1BDA0A'
  });
}

function _getVacancyGroup(isDay) {
  return _getMarkerGroupFromData(require('./data/vacancies.js'), {
    color: 'red',
    fillColor: '#f03',
  });
}

function _getMarkerGroupFromData(data, options) {
  return leaflet.layerGroup(data.addresses.map(function(address) {
    return _getMarkerFromAddress(address, {
      color: options.color,
      fillColor: options.fillColor
    });
  }));
}

function _getMarkerFromAddress(address, options) {
  return leaflet.circleMarker(
    leaflet.latLng(address.lat, address.lng), {
      radius: 4,
      color: options.color,
      fillColor: options.fillColor,
      fillOpacity: 0.8
  }).bindPopup(address.name + '<br>' + address.address);
}
