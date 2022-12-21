var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', eventListener);

function eventListener(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
        var $dataview = event.target.getAttribute('data-view');
        for (var j = 0; j < $view.length; j++) {
          if ($view[j].getAttribute('data-view') === $dataview) {
            $view[j].className = 'view';
          } else {
            $view[j].className = 'view hidden';
          }
        }
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
}
