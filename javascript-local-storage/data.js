/* exported todos */
window.addEventListener('beforeunload', callBack);

function callBack(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = (JSON.parse(previousTodosJSON));
}
