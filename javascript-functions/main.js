function convertMinutesToSeconds(minutes) {
  var converted = minutes * 60;
  return converted;
}

console.log('convertMinutesToSeconds(5) result:', convertMinutesToSeconds(5));

function greet(name) {
  var fullGreet = 'Hey, ' + name;
  return fullGreet;
}

console.log('greet(\'Beavis\') result:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea(17,42) result:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('getFirstName({firstName: \'Lelouche\', lastName: \'Lamperouge\'}) result:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('getLastElement([\'propane\', \'and\', \'propane\', \'accessories\']) result:', getLastElement(['propane', 'and', 'propane', 'accessories']));
