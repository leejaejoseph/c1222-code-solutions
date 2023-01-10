/* exported compact */
/* define a function named compact with one parameter(array)
set a variable to an empty array
run a for loop from the beginning until the array length to run through all of the array items
check to see if the value is true
push the datatype (of the array and index i) that resulted in true to be pushed into the return Array
will just continue if array[i] was strictly equal to false.
return the return array
*/
function compact(array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
