/* exported compact */
// define a function named compact with one parameter(array)
function compact(array) {
  // set a variable to an empty array
  var returnArray = [];
  // run a for loop from the beginning until the array length to run through all of the array items
  for (var i = 0; i < array.length; i++) {
    // check to see if the value is true
    if (array[i]) {
      /* push the datatype (of the array and index i) that resulted
       in true to be pushed into the return Array */
      returnArray.push(array[i]);
    } // will just continue if array[i] was strictly equal to false.
  }
  // return the return array
  return returnArray;
}
