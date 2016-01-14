var map = require('./map.js');

var isDay = true;
map.init({
  debug: true,
  isDay: isDay
});

var timeSwitchButton = document.getElementById('time-switch-button');
timeSwitchButton.addEventListener('click', function() {
  isDay = !isDay;

  if (isDay) {
    map.switchToDay();
    timeSwitchButton.innerHTML = 'Switch to night';
  } else {
    map.switchToNight();
    timeSwitchButton.innerHTML = 'Switch to day';
  }
});
