var leaflet = require('leaflet');

var addresses = [
  {
    'address': '1615 W Howard St',
    'name': 'Sol Cafe',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.67197668552399,
    'type': 'restaurant',
    'hours': {
      open: 7,
      close: 7
    }
  },
  {
    'address': '1621 W Howard St',
    'name': 'Factory Theater',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.67204642295837,
    'type': 'theater'
  },
  {
    'address': '7628 N Paulina St',
    'name': 'The Recyclery',
    'city': 'Chicago',
    'lat': 42.02032411511653,
    'lng': -87.67322659492493,
    'type': 'other',
    'hours': {
      open: 10,
      close: 9
     }
  },
  {
    'address': '7640 N Sheridan Rd',
    'name': 'Beachview Liqours',
    'city': 'Chicago',
    'lat': 42.020300203516186,
    'lng': -87.66657471656798,
    'type': 'retail',
    'hours': {
      open: 10,
      close: 9
    }
  },
  {
    'address': '1627 W Howard St',
    'name': 'P & J Footwear',
    'city': 'Chicago',
    'lat': 42.0192717,
    'lng': -87.6723943,
    'type': 'retail',
    'hours': {
      open: 10,
      close: 7.5
    }
  },
  {
    'address': '1605 W Howard St',
    'name': 'Around the Clock Food & Liqour',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.6715519,
    'type': 'retail',
    'hours': {
      open: 10,
      close: 8
    }
  },
  {
    'address': '1609 W Howard St',
    'name': 'Laced Up',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.6717737,
    'type': 'retail',
    'hours': {
      open: 10,
      close: 8
    }
  },
  {
    'address': '1635 W Howard St',
    'name': 'Zip Z Express',
    'city': 'Chicago',
    'lat': 42.0192716,
    'lng': -87.6726798,
    'type': 'restaurant',
    'hours': {
      open: 9,
      close: 8
    }
  },
  {
    'address': '1511 Howard St',
    'name': 'Lost Eras',
    'city': 'Chicago',
    'lat': 42.019258296615554,
    'lng': -87.66892969608307,
    'type': 'retail',
    'hours': {
      open: 10,
      close: 6
    }
  },
];

module.exports = leaflet.layerGroup(addresses.map(function(address) {
  return leaflet.circleMarker(
    leaflet.latLng(address.lat, address.lng), {
      radius: 4,
      color: 'green',
      fillColor: '#1BDA0A',
      fillOpacity: 0.8
  }).bindPopup(address.address);
}));
