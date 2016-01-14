var leaflet = require('leaflet');
var layerBuilder = require('./layer_builder.js');


module.exports = {
  init: init,
  switchToDay: switchToDay,
  switchToNight: switchToNight
};

var map = _getMap();
var dayLayers = layerBuilder.getDayLayers();
var nightLayers = layerBuilder.getNightLayers();

function init(options) {
  // layerBuilder.getLayerControl().addTo(map);

  if (options.isDay) {
    switchToDay();
  } else {
    switchToNight();
  }

  if (options.debug) {
    _addDebuggerControls(map);
  }
}

function switchToDay() {
  map.removeLayer(nightLayers);
  map.addLayer(dayLayers);
}

function switchToNight() {
  map.removeLayer(dayLayers);
  map.addLayer(nightLayers);
}

function _addDebuggerControls(map) {
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

  map.on('dragend', function(event) {
    console.log('center', map.getCenter());
  });
}

function _getMap() {
  return leaflet.map('map-container', {
    attributionControl: false,
    boxZoom: false,
    center: [
      42.01972059353658,
      -87.67039954662323
    ],
    dragging: false,
    doubleClickZoom: false,
    zoom: 18,
    zoomControl: false
  });
}
