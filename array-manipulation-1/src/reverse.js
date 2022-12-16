/* exported reverse */
// define a function named reverse with one parameter(array)
function reverse(array) {
  // set a variable to an empty array
  var returnArray = [];
  /* run through the for loop from the length of the array - 1 to start from the correct index until the -1th index minus 1 to include the zeroeth index */
  for (var i = array.length - 1; i > -1; i--) {
    // push the array at the initialized index into the return array
    returnArray.push(array[i]);
  }
  // return the return array
  return returnArray;
}
