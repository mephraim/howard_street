var leaflet = require('leaflet');
var markerBuilder = require('./marker_builder.js');
var tileBuilder = require('./tile_builder.js');

module.exports = {
  init: init,
  switchToDay: switchToDay,
  switchToNight: switchToNight
};

var map = _getMap();
var dayTiles = tileBuilder.getDayTiles();
var nightTiles = tileBuilder.getNightTiles();

function init(options) {
  map.addLayer(require('./data/streets.js'));
  map.addLayer(require('./data/trains.js'));
  map.addLayer(markerBuilder.getMarkers());

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
  map.removeLayer(nightTiles);
  map.addLayer(dayTiles);
  markerBuilder.setMarkersToDay();
}

function switchToNight() {
  map.removeLayer(dayTiles);
  map.addLayer(nightTiles);
  markerBuilder.setMarkersToNight();
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
