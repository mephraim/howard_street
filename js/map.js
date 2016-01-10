var leaflet = require('leaflet');
require('leaflet-providers');

module.exports = leaflet.map('map-container', {
  center: [
    42.01973653474977,
    -87.67045319080353
  ],
  layers: [
    leaflet.tileLayer.provider('OpenStreetMap.BlackAndWhite')
  ],
  zoom: 18,
  zoomControl: false
});
