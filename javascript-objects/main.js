var student = {
  firstName: 'Joseph',
  lastName: 'Lee',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'staff accountant';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'McLaren',
  model: 'MCL36',
  year: 2022
};

vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']', vehicle['color']);
console.log('value of vehicle[isConvertable]', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'shine',
  type: 'pomeranian'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
