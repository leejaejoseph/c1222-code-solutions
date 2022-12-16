/* The Math Object */
var number1 = 5;
var number2 = 10;
var number3 = 15;

var maximumValue = Math.max(number1, number2, number3);
console.log('value of maximumValue:', maximumValue);

var heroes = ['ironman', 'spiderman', 'black panther', 'dr.strange'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('value of randonIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

/* Array Methods */
var library = [{
  title: 'bible',
  author: 'God'
},
{
  title: 'Javascript & Jquery',
  author: 'Duckett'
},
{
  title: 'McDonald\'s secret sauce',
  author: 'Ronald Mcdonald'
}];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array:', library);

/* String methods */

var fullName = 'Joseph Lee';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
