/* exported lastChars */
/* define the new function "lastChars" with 2 parameters (length and string)
set a variable to an empty return string
make sure length is within the length of string
set length variable to length of string to append every character
set a for loop until its length is met and incrment per loop
however, initialize at the index where string's length minus length is in order to get the last characters
append the argument string at index i
return the return string */
function lastChars(length, string) {
  var returnString = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = (string.length - length); i < string.length; i++) {
    returnString += string[i];
  } return returnString;
}
