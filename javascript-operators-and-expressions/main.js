var width = 25;
var height = 50;
var area = width * height;
console.log('value of area:', area);
console.log('type of area:', typeof area);

var bill = 20;
var payment = 50;
var change = payment - bill;
console.log('value of change:', change);
console.log('type of change:', typeof change);

var quizzes = 90;
var midterm = 80;
var final = 99;
var grade = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

var firstName = 'Joseph';
var lastName = 'Lee';
var fullName = `${firstName} ${lastName}`;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

var pH = 14;
var isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

var headCount = 300;
var isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
