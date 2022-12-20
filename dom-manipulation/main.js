var buttonClicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function buttonClicksIncrease() {
  buttonClicks++;
  clickCount.textContent = 'Clicks: ' + buttonClicks;
  if (buttonClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (buttonClicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (buttonClicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (buttonClicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (buttonClicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', buttonClicksIncrease);

/*
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var click = document.querySelector('button.click-button');
click.addEventListener('click', handleClick);
*/
