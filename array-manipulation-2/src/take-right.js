/* exported takeRight */
// define function takeRight with two parameters array and count
function takeRight(array, count) {
  // create a return array to hold array from (array.length - count) to array.length;
  var returnArray = [];
  // create a conditional for if count is bigger than array to set it equal to length of array
  if (count > array.length) {
    // set it equal to length of array
    count = array.length;
  }
  // loop through every index starting from (array.length - count) to array.length and increment
  for (var i = (array.length - count); i < array.length; i++) {
    // push to return Array the argument array at index i
    returnArray.push(array[i]);
    // return return array from function
  } return returnArray;
}
