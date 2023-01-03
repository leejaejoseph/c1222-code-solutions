/* exported initial */
/* define a function named initial with one parameter(array)
set a variable to an empty array
run a for loop from the beginning until the array length minus 1 to exempt the last value
push the array at the initialized index into the return array
return the return array */
function initial(array) {
  var returnArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
}
