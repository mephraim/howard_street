var leaflet = require('leaflet');

var addresses = [
  {
    'address': '1610 Howard St',
    'name': 'Willye B. White Fieldhouse',
    'city': 'Chicago',
    'lat': 42.019493430814336,
    'lng': -87.67151534557343,
    'hours': {
      'open': 6,
      'close': 23
    }
  },
  {
    'address': '1631 W Jonquil Terrace',
    'name': 'Gale Community Academy',
    'city': 'Chicago',
    'lat': 42.02050345183246,
    'lng': -87.67141878604889,
    'hours': {
      'open': 6,
      'close': 17
    }
  },
  {
    'address': '7617 N Paulina St',
    'name': 'US Post Office',
    'city': 'Chicago',
    'lat': 42.01995174073677,
    'lng': -87.6729489,
    'hours': {
      'open': 11,
      'close': 5
    }
  },
];

module.exports = leaflet.layerGroup(addresses.map(function(address) {
  return leaflet.circleMarker(
    leaflet.latLng(address.lat, address.lng), {
      radius: 4,
      color: 'blue',
      fillColor: '#56BFDA',
      fillOpacity: 0.8
  }).bindPopup(address.address);
}));
