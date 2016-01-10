var leaflet = require('leaflet');
require('leaflet-providers');

module.exports = leaflet.map('map-container', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  center: [
    42.01973653474977,
    -87.67045319080353
  ],
  layers: [
    leaflet.tileLayer.provider('OpenStreetMap.BlackAndWhite')
  ],
  zoom: 18
});
