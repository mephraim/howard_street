var leaflet = require('leaflet');

var addresses = [
  {
    'address': '1615 Howard St',
    'name': 'Sol Cafe',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.67197668552399,
    'type': 'restaurant'
  },
  {
    'address': '1621 Howard St',
    'name': 'Factory Theater',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.67204642295837,
    'type': 'restaurant'
  },
];

module.exports = leaflet.layerGroup(addresses.map(function(address) {
  return leaflet.circleMarker(
    L.latLng(address.lat, address.lng), {
      radius: 4,
      color: 'black',
      fillColor: 'black',
      fillOpacity: 0.8
  }).bindPopup(address.address);
}));
