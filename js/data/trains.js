var leaflet = require('leaflet');

var purpleLine = new leaflet.polyline([
  new L.LatLng(42.01875, -87.67249),
  new L.LatLng(42.02066, -87.67481),
], {
  color: 'purple',
  weight: 10,
  opacity: 0.1,
  lineCap: 'square'
});

var redLine = new leaflet.polyline([
  new L.LatLng(42.01875, -87.67260),
  new L.LatLng(42.02066, -87.67493),
], {
  color: 'red',
  weight: 10,
  opacity: 0.1,
  lineCap: 'square'
});

module.exports = leaflet.layerGroup([redLine, purpleLine]);
