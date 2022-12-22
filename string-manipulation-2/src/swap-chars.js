/* exported swapChars */
// define the new function "swapChars" with 3 parameters (firstindex, second index and string)
function swapChars(firstIndex, secondIndex, string) {
  // set a variable to an empty return string
  var returnString = '';
  // set a for loop to go through all the indexes of the string
  for (var i = 0; i < string.length; i++) {
    // set condition where if initialization var is equal to first param index,
    if (i === firstIndex) {
      // concatenate the string at opposing index to return string
      returnString += string[secondIndex];
    // set condition where if initialization var is equal to second param index,
    } else if (i === secondIndex) {
      // concatenate the string at opposing index to return string
      returnString += string[firstIndex];
    } else {
      // concatenate the string at index to return string
      returnString += string[i];
    }
  // return return string
  } return returnString;
}
