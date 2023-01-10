/* exported tail */
/* define a function named tail with one parameter(array)
set a variable to an empty array
take a for loop with the length of the array as its condition incremented by one but start from the second array so it skips the first
push the array item at the indexed value to the return Array
return the return array */
function tail(array) {
  var returnArray = [];
  for (var i = 1; i < array.length; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
