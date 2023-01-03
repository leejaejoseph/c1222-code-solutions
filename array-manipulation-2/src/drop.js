/* exported drop */
/* define function drop with two parameters array and count
create a return array to hold array from count to array.length;
create a conditional for if count is bigger than array to set it equal to length of array
set it equal to length of array
loop through every index starting from count to array.length and increment
push to return Array the argument array at index i
return return array from function */
function drop(array, count) {
  var returnArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = count; i < array.length; i++) {
    returnArray.push(array[i]);
  } return returnArray;
}
