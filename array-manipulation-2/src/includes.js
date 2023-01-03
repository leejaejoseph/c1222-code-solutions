/* exported includes */
/* define function includes with two parameters array and value
create a return variable to hold boolean false;
loop through every index starting from 0 to array.length
create conditional to check if array at index is strictly equal to value
if condition is correct, change return variable as true
return the return variable */
function includes(array, value) {
  var returnBoolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      returnBoolean = true;
    }
  } return returnBoolean;
}
