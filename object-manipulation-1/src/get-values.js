/* exported getValues */
// define a function named getValues with 1 parameter (object)
function getValues(object) {
  // set an empty array to s return variable
  var returnArray = [];
  // run a for in loop going through every key in the object
  for (var keys in object) {
    // push the value from the key "keys" of object "object" into the return Array
    returnArray.push(object[keys]);
  }
  // return the value of the return Array from the function
  return returnArray;
}
