/* exported reverse */
/* define a function named reverse with one parameter(array)
set a variable to an empty array
run through the for loop from the length of the array - 1 to start from the correct index until the -1th index minus 1 to include the zeroeth index
push the array at the initialized index into the return array
return the return array
*/
function reverse(array) {
  var returnArray = [];
  for (var i = array.length - 1; i > -1; i--) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
