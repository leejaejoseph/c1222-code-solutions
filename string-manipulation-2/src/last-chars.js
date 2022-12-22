/* exported lastChars */
// define the new function "lastChars" with 2 parameters (length and string)
function lastChars(length, string) {
  // set a variable to an empty return string
  var returnString = '';
  // make sure length is within the length of string
  if (length > string.length) {
    // set length variable to length of string to append every character
    length = string.length;
  }
  // set a for loop until its length is met and incrment per loop
  // however, initialize at the index where string's length minus length is in order to get the last characters
  for (var i = (string.length - length); i < string.length; i++) {
  // append the argument string at index i
    returnString += string[i];
    // return the return string
  } return returnString;
}
