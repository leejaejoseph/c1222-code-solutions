function ExampleConstructor() {}

console.log('value of prototype property of ExampleConstructor Function:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor Function:', typeof ExampleConstructor.prototype);

var constructed = new ExampleConstructor();
console.log('value of var constructed:', constructed);
var instanceCheck = constructed instanceof ExampleConstructor;
console.log('value of instanceCheck:', instanceCheck);
