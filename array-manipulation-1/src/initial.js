/* exported initial */
// define a function named initial with one parameter(array)
function initial(array) {
  // set a variable to an empty array
  var returnArray = [];
  // run a for loop from the beginning until the array length minus 1 to exempt the last value
  for (var i = 0; i < array.length - 1; i++) {
    // push the array at the initialized index into the return array
    returnArray.push(array[i]);
  }
  // return the return array
  return returnArray;
}
