/* exported chunk */
/* define function chunk with two parameters array and size
create a return array to hold sub arrays
create a conditional for if size is bigger than array to set it equal to length of array
set it equal to length of array
set counter to see if size has been met in sub string
create an array to hold the subarray that is to be pushed to the return Array
loop through every index starting from 0 to array.length to go through every index and increment
create conditional to see if its the last index of array
push the array and index into the sub array
push the sub array into the return array
create conditional to see if sizeCounter is equal to size
push the array and index into the sub array
push the sub array into the return array
reset subArray to empty
reset sizeCounter to its start
create conditional for any value not at the end of its size or the end of the array
push the array and index into the sub array
increment the size counter
return the return Array */
function chunk(array, size) {
  var returnArray = [];
  if (size > array.length) {
    size = array.length;
  }
  var sizeCounter = 1;
  var subArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      subArray.push(array[i]);
      returnArray.push(subArray);
    } else if (sizeCounter === size) {
      subArray.push(array[i]);
      returnArray.push(subArray);
      subArray = [];
      sizeCounter = 1;
    } else {
      subArray.push(array[i]);
      sizeCounter++;
    }
  } return returnArray;
}
