var data = require('./data.js');
var leaflet = require('leaflet');
var map = require('./map.js');

leaflet.layerGroup(data.addresses.map(function(address) {
  return leaflet.circleMarker(
    L.latLng(address.lat, address.lng), {
      radius: 4,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.8
  }).bindPopup(address.address);
})).addTo(map);

map.on('dragend', function(event) {
  console.log(map.getCenter());
});
