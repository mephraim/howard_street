var leaflet = require('leaflet');

var CLOSED_MARKER_STYLE = {
  color: '#444',
  fillColor: '#444'
};

var groups = {
  city: _getCityGroup(),
  cta: _getCtaGroup(),
  grocery: _getGroceryGroup(),
  other: _getOtherGroup(),
  restaurant: _getRestaurantGroup(),
  retail: _getRetailGroup(),
  vacancy: _getVacancyGroup()
};

var markers = _getMarkers();

module.exports = {
  getMarkers: function() {
    return markers;
  },

  setMarkersToDay: setMarkersToDay,
  setMarkersToNight: setMarkersToNight
};

function setMarkersToDay() {
  _forEachGroup(function(name, group) {
    group.eachLayer(function(marker) {
      marker.setOpen();
    });
  });
}

function setMarkersToNight() {
  _forEachGroup(function(name, group) {
    group.eachLayer(function(marker) {
      if (marker.addressData.hours &&
          marker.addressData.hours.close <= 20) {
        marker.setClosed();
      }
    });
  });
}

function _getMarkers() {
  return leaflet.layerGroup([
    groups.city,
    groups.cta,
    groups.grocery,
    groups.other,
    groups.restaurant,
    groups.retail,
    groups.vacancy
  ]);
}

function _getCityGroup() {
  return _getMarkerGroupFromData(require('./data/city.js'), {
    open: {
      color: 'blue',
      fillColor: '#56BFDA'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getCtaGroup() {
  return _getMarkerGroupFromData(require('./data/cta_retail.js'), {
    open: {
      color: 'red',
      fillColor: '#f03'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getGroceryGroup() {
  return _getMarkerGroupFromData(require('./data/grocery.js'), {
    open: {
      color: 'green',
      fillColor: '#1BDA0A'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getEntertainmentGroup() {
  return _getMarkerGroupFromData(require('./data/entertainment.js'), {
    open: {
      color: 'green',
      fillColor: '#1BDA0A'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getRestaurantGroup() {
  return _getMarkerGroupFromData(require('./data/restaurants.js'), {
    open: {
      color: 'green',
      fillColor: '#1BDA0A'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getRetailGroup() {
  return _getMarkerGroupFromData(require('./data/retail.js'), {
    open: {
      color: 'green',
      fillColor: '#1BDA0A'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getOtherGroup() {
  return _getMarkerGroupFromData(require('./data/other.js'), {
    open: {
      color: 'green',
      fillColor: '#1BDA0A'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getVacancyGroup() {
  return _getMarkerGroupFromData(require('./data/vacancies.js'), {
    open: {
      color: 'red',
      fillColor: '#f03'
    },
    closed: CLOSED_MARKER_STYLE
  });
}

function _getMarkerGroupFromData(data, options) {
  return leaflet.layerGroup(data.addresses.map(function(address) {
    return _getMarkerFromAddress(address, options);
  }));
}

function _getMarkerFromAddress(address, options) {
  var marker = leaflet.circleMarker(
    leaflet.latLng(address.lat, address.lng), {
      radius: 4,
      fillOpacity: 0.8
  }).bindPopup(address.name + '<br>' + address.address);

  marker.setOpen = function() {
    marker.setStyle(options.open);
  };

  marker.setClosed = function() {
    marker.setStyle(options.closed);
  };

  marker.addressData = address;
  return marker;
}

function _forEachGroup(func) {
  for (var group in groups) {
    func(group, groups[group]);
  }
}
