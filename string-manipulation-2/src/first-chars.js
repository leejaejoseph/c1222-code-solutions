/* exported firstChars */
// define the new function "firstChars" with 2 parameters (length and string)
function firstChars(length, string) {
  // set a variable to an empty return string
  var returnString = '';
  // make sure length is within the length of string
  if (length > string.length) {
    // set length variable to length of string to append every character
    length = string.length;
  }
  // set a for loop until its length is met and incrment per loop
  for (var i = 0; i < length; i++) {
  // append the argument string at index i
    returnString += string[i];
  } return returnString;
}
