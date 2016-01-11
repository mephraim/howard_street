var map = require('./map.js');

require('./data/city.js').addTo(map);
require('./data/retail.js').addTo(map);
require('./data/streets.js').addTo(map);
require('./data/vacancies.js').addTo(map);
