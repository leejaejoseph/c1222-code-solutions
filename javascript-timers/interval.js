var start;
var $h1 = document.querySelector('h1.countdown-display');
var count = Number($h1.textContent);

function stopInterval() {
  if (!start) {
    start = setInterval(countDown, 1000);
  }
}

function countDown() {
  count--;
  $h1.textContent = count;
  if (count === 0) {
    clearInterval(start);
    start = null;
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }

}

stopInterval();
