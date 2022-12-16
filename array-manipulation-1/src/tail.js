/* exported tail */
// define a function named tail with one parameter(array)
function tail(array) {
  // set a variable to an empty array
  var returnArray = [];
  /* take a for loop with the length of the array as its condition incremented by one
  but start from the second array so it skips the first */
  for (var i = 1; i < array.length; i++) {
    // push the array item at the indexed value to the return Array
    returnArray.push(array[i]);
  }
  // return the return array
  return returnArray;
}
