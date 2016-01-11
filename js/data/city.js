var leaflet = require('leaflet');

var addresses = [
  {
    'address': '7519 North Paulina St',
    'name': 'Howard CTA',
    'city': 'Chicago',
    'lat': 42.019383585391125,
    'lng': -87.67334997653961
  },
  {
    'address': '1610 Howard St',
    'name': 'Willye B. White Fieldhouse',
    'city': 'Chicago',
    'lat': 42.01952307161032,
    'lng': -87.67151534557343
  },
  {
    'address': 'Gale Community Academy',
    'name': '1631 W Jonquil Terrace',
    'city': 'Chicago',
    'lat': 42.02050345183246,
    'lng': -87.67141878604889
  }
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
