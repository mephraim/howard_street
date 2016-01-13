var debug = true;

var leaflet = require('leaflet');
var layerBuilder = require('./layer_builder.js');

var map = leaflet.map('map-container', {
  attributionControl: false,
  boxZoom: false,
  center: [
    42.01973653474977,
    -87.67045319080353
  ],
  dragging: false,
  doubleClickZoom: false,
  layers: layerBuilder.getLayers(),
  zoom: 18,
  zoomControl: false
});

layerBuilder.getLayerControl().addTo(map);

module.exports = map;

if (debug) {
  var debugMarker = leaflet.circleMarker(leaflet.latLng(0, 0), {
    daggable: true,
    radius: 4,
    color: 'black',
    fillColor: 'black',
    fillOpacity: 1
  }).addTo(map);

  map.on('click', function(event) {
    console.log('location', event.latlng);
    debugMarker.setLatLng(
      leaflet.latLng(event.latlng.lat, event.latlng.lng));
  });
}
