var lightSwitch = 0;
var $roomOn = document.querySelector('.lightbulb');
var bodySelector = document.querySelector('body');
function changedLights() {
  if (lightSwitch === 0) {
    $roomOn.className = 'lightbulb on';
    bodySelector.style.backgroundColor = '#fef9f1';
    lightSwitch = 1;
  } else {
    $roomOn.className = 'lightbulb off';
    bodySelector.style.backgroundColor = '#111111';
    lightSwitch = 0;
  }
}
$roomOn.addEventListener('click', changedLights);
