var $h1 = document.querySelector('h1');
var $h1Text = document.querySelector('h1').textContent;

for (let i = 0; i < $h1Text.length; i++) {
  var $span = document.createElement('span');
  var $spanTextContent = document.createTextNode($h1Text[i]);
  $span.appendChild($spanTextContent);
  $span.className = 'span-' + i;
  $h1.appendChild($span);
}

$h1.firstChild.remove();

var $h1All = $h1.querySelectorAll('span');
$h1All[0].className += ' selected';

document.addEventListener('keydown', typingFunction);
var i = 0;

function typingFunction(event) {
  if ($h1All[i].className !== 'span-' + i + ' selected incorrect') {
    $h1All[i].className += ' selected';
  }
  if (event.key === $h1All[i].textContent) {
    $h1All[i].className = 'span-' + i + ' completed';
    i++;
    if (i < $h1Text.length) {
      $h1All[i].className += ' selected';
    }
  } else {
    $h1All[i].className = 'span-' + i + ' selected incorrect';
  }
}
