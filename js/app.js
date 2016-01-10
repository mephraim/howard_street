var map = require('./map.js');

require('./data/retail.js').addTo(map);
require('./data/streets.js').addTo(map);
require('./data/vacancies.js').addTo(map);

map.on('click', function(event) {
  console.log(event.latlng);
});

