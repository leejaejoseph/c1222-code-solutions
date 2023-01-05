var $userList = document.querySelector('#user-list');

var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.responseType = 'json';

req.addEventListener('load', function () {
  console.log('value of req.status:', req.status);
  console.log('value of req.response:', req.response);
  for (var i = 0; i < req.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = req.response[i].name;
    $userList.appendChild($li);
  }
});
req.send();
