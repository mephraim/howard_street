var leaflet = require('leaflet');
var layerBuilder = require('./layer_builder.js');


module.exports = {
  init: init
};

function init(options) {
  var map = getMap();
  layerBuilder.getLayerControl().addTo(map);

  if (options.isDay) {
    layerBuilder.getDayLayers().addTo(map);
  } else {
    layerBuilder.getNightLayers().addTo(map);
  }

  if (options.debug) {
    addDebuggerControls(map);
  }
}

function getMap() {
  return leaflet.map('map-container', {
    attributionControl: false,
    boxZoom: false,
    center: [
      42.01973653474977,
      -87.67045319080353
    ],
    dragging: false,
    doubleClickZoom: false,
    zoom: 18,
    zoomControl: false
  });
}

function addDebuggerControls(map) {
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
