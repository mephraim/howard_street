var leaflet = require('leaflet');

var howard = new leaflet.polyline([
  new L.LatLng(42.01941148265944, -87.67633259296417),
  new L.LatLng(42.019355688110565, -87.66865611076355),
  new L.LatLng(42.019224172194534, -87.66816794872284),
  new L.LatLng(42.01924409886596, -87.6661080121994)
], {
  color: 'green',
  weight: 18,
  opacity: 0.2,
  lineCap: 'square'
});

var paulina = new leaflet.polyline([
  new L.LatLng(42.02117122757243, -87.67307102680206),
  new L.LatLng(42.019455, -87.67307102680206),
], {
  color: 'green',
  weight: 16,
  opacity: 0.1,
  lineCap: 'square'
});

var rogers = new leaflet.polyline([
  new L.LatLng(42.02026259254329, -87.66633331775664),
  new L.LatLng(42.01834564886186, -87.67036736011505),
], {
  color: 'green',
  weight: 16,
  opacity: 0.1,
  lineCap: 'square'
});

module.exports = leaflet.layerGroup([howard, paulina, rogers]);
