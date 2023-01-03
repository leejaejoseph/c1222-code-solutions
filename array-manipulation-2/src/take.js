/* exported take */
/* define function take with two parameters array and count
create a return array to hold array from index to count;
create a conditional for if count is bigger than array to set it equal to length of array
set it equal to length of array
loop through every index until count and increment
push to return Array the argument array at index i
return return array from function */
function take(array, count) {
  var returnArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < count; i++) {
    returnArray.push(array[i]);
  } return returnArray;
}
