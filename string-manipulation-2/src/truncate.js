/* exported truncate */
// define the new function "truncate" with 2 parameters (length and string)
function truncate(length, string) {
  // assign an empty string to the return string
  var returnString = '';
  // run a for loop from initialization 0 until the length and increment by 1
  for (var i = 0; i < length; i++) {
    // check to see if string is undefined
    if (string[i] === undefined) {
      // if the string is empty, break the loop
      break;
    } // concatenate the string at initialized index to the return string
    returnString += string[i];
  } // concatenate 3 an ellipsis
  returnString += '...';
  // return the return string
  return returnString;
}
