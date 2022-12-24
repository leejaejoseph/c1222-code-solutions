/* exported dropRight */
// define function drop with two parameters array and count
function dropRight(array, count) {
  // create a return array to hold array from start to array.length - count;
  var returnArray = [];
  // create a conditional for if count is bigger than array to set it equal to length of array
  if (count > array.length) {
    // set it equal to length of array
    count = array.length;
  }
  // loop through every index starting from 0 to array.length - count and increment
  for (var i = 0; i < (array.length - count); i++) {
    // push to return Array the argument array at index i
    returnArray.push(array[i]);
    // return return array from function
  } return returnArray;
}
