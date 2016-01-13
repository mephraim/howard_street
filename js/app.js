var map = require('./map.js');

var isDay = true;
map.init({
  isDay: isDay
});

var timeSwitchButton = document.getElementById('time-switch-button');
timeSwitchButton.addEventListener('click', function() {
  isDay = !isDay;

  if (isDay) {
    timeSwitchButton.innerHTML = 'Switch to night';
  } else {
    timeSwitchButton.innerHTML = 'Switch to day';
  }
});
