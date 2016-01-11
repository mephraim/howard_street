var leaflet = require('leaflet');

var redLine = new leaflet.polyline([
  new L.LatLng(42.018753900936275, -87.6726472),
  new L.LatLng(42.020666847066614, -87.6749753),
], {
  color: 'red',
  weight: 2,
  opacity: 0.5,
  lineCap: 'square'
});

var purpleLine = new leaflet.polyline([
  new L.LatLng(42.018753900936275, -87.67268),
  new L.LatLng(42.020666847066614, -87.67501),
], {
  color: 'purple',
  weight: 2,
  opacity: 0.5,
  lineCap: 'square'
});

module.exports = leaflet.layerGroup([redLine, purpleLine]);
