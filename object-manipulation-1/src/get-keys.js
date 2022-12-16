/* exported getKeys */
// define a function named getKeys with 1 parameter (object)
function getKeys(object) {
  // set an empty array to s return variable
  var returnArray = [];
  // run a for in loop going through every key in the object
  for (var keys in object) {
    // push the keys into the return Array
    returnArray.push(keys);
  }
  // return the value of the return Array from the function
  return returnArray;
}
