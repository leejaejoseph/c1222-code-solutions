/* exported dropRight */
/* define function drop with two parameters array and count
create a return array to hold array from start to array.length - count;
create a conditional for if count is bigger than array to set it equal to length of array
set it equal to length of array
loop through every index starting from 0 to array.length - count and increment
push to return Array the argument array at index i
return return array from function */
function dropRight(array, count) {
  var returnArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < (array.length - count); i++) {
    returnArray.push(array[i]);
  } return returnArray;
}
