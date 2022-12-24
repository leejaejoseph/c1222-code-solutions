/* exported includes */
// define function includes with two parameters array and value
function includes(array, value) {
  // create a return variable to hold boolean false;
  var returnBoolean = false;
  // loop through every index starting from 0 to array.length
  for (var i = 0; i < array.length; i++) {
    // create conditional to check if array at index is strictly equal to value
    // if condition is correct, change return variable as true
    if (array[i] === value) {
      returnBoolean = true;
    }
    // return the return variable
  } return returnBoolean;
}
