var leaflet = require('leaflet');

var CLOSED_MARKER_STYLE = {
  color: '#444',
  fillColor: '#444'
};

var groups = {
  city: _getCityGroup(),
  cta: _getCtaGroup(),
  entertainment: _getEntertainmentGroup(),
  grocery: _getGroceryGroup(),
  other: _getOtherGroup(),
  restaurant: _getRestaurantGroup(),
  retail: _getRetailGroup(),
  vacant: _getVacancyGroup()
};

var markers = _getMarkers();

module.exports = {
  getMarkerLayerControl: getMarkerLayerControl,
  getMarkers: function() {
    return markers;
  },

  setMarkersToDay: setMarkersToDay,
  setMarkersToNight: setMarkersToNight
};

function getMarkerLayerControl() {
  return leaflet.control.layers(null, _getMarkerLayers(), {
    collapsed: false,
    position: 'topleft'
  });
}

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

function _getMarkerLayers() {
  var labels = {};
  labels[_getMarkerLayerLabel('City', 'city')] = groups.city;
  labels[_getMarkerLayerLabel('CTA', 'cta')] = groups.cta;
  labels[_getMarkerLayerLabel('Entertainment', 'entertainment')] = groups.entertainment;
  labels[_getMarkerLayerLabel('Grocery', 'grocery')] = groups.grocery;
  labels[_getMarkerLayerLabel('Other', 'other')] = groups.other;
  labels[_getMarkerLayerLabel('Restaurant', 'restaurant')] = groups.restaurant;
  labels[_getMarkerLayerLabel('Retail', 'retail')] = groups.retail;
  labels[_getMarkerLayerLabel('Vacant', 'vacant')] = groups.vacant;

  return labels;
}

function _getMarkerLayerLabel(text, cssClass) {
  var element = document.createElement('span');
  element.classList.add('marker-layer-label');
  element.classList.add(cssClass);
  element.innerText = text;

  return element.outerHTML;
}

function _getMarkers() {
  return [
    groups.city,
    groups.cta,
    groups.entertainment,
    groups.grocery,
    groups.restaurant,
    groups.retail,
    groups.other,
    groups.vacant
  ];
}

function _getCityGroup() {
  return _getMarkerGroupFromData(require('./data/city.js'), {
    open: {
      color: '#56BFDA',
      fillColor: '#56BFDA'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getCtaGroup() {
  return _getMarkerGroupFromData(require('./data/cta_retail.js'), {
    open: {
      color: '#086AEB',
      fillColor: '#086AEB'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getEntertainmentGroup() {
  return _getMarkerGroupFromData(require('./data/entertainment.js'), {
    open: {
      color: '#FF6F00',
      fillColor: '#FF6F00'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getGroceryGroup() {
  return _getMarkerGroupFromData(require('./data/grocery.js'), {
    open: {
      color: '#1BDA0A',
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

function _getRestaurantGroup() {
  return _getMarkerGroupFromData(require('./data/restaurants.js'), {
    open: {
      color: '#C76700',
      fillColor: '#C76700'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getRetailGroup() {
  return _getMarkerGroupFromData(require('./data/retail.js'), {
    open: {
      color: '#FF5E5E',
      fillColor: '#FF5E5E'
    },

    closed: CLOSED_MARKER_STYLE
  });
}

function _getVacancyGroup() {
  return _getMarkerGroupFromData(require('./data/vacancies.js'), {
    open: {
      color: '#f03',
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
      fillOpacity: 0.9,
      weight: 1
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
