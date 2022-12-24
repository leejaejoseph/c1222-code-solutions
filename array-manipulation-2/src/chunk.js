/* exported chunk */
// define function chunk with two parameters array and size
function chunk(array, size) {
  // create a return array to hold sub arrays
  var returnArray = [];
  // create a conditional for if size is bigger than array to set it equal to length of array
  if (size > array.length) {
    // set it equal to length of array
    size = array.length;
  }
  // set counter to see if size has been met in sub string
  var sizeCounter = 1;
  // create an array to hold the subarray that is to be pushed to the return Array
  var subArray = [];
  // loop through every index starting from 0 to array.length to go through every index and increment
  for (var i = 0; i < array.length; i++) {
    // create conditional to see if its the last index of array
    if (i === array.length - 1) {
      // push the array and index into the sub array
      subArray.push(array[i]);
      // push the sub array into the return array
      returnArray.push(subArray);
    // create conditional to see if sizeCounter is equal to size
    } else if (sizeCounter === size) {
      // push the array and index into the sub array
      subArray.push(array[i]);
      // push the sub array into the return array
      returnArray.push(subArray);
      // reset subArray to empty
      subArray = [];
      // reset sizeCounter to its start
      sizeCounter = 1;
    // create conditional for any value not at the end of its size or the end of the array
    } else {
      // push the array and index into the sub array
      subArray.push(array[i]);
      // increment the size counter
      sizeCounter++;
    }
  // return the return Array
  } return returnArray;
}
