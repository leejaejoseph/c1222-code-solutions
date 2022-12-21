var lightSwitch = false;
var $roomOn = document.querySelector('.lightbulb');
var bodySelector = document.querySelector('body');
function changedLights() {
  if (lightSwitch === false) {
    $roomOn.className = 'lightbulb on';
    bodySelector.style.backgroundColor = '#fef9f1';
    lightSwitch = true;
  } else {
    $roomOn.className = 'lightbulb off';
    bodySelector.style.backgroundColor = '#111111';
    lightSwitch = false;
  }
}
$roomOn.addEventListener('click', changedLights);
