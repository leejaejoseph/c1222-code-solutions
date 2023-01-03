/* exported firstChars */
/* define the new function "firstChars" with 2 parameters (length and string)
set a variable to an empty return string
make sure length is within the length of string
set length variable to length of string to append every character
set a for loop until its length is met and incrment per loop
append the argument string at index i */
function firstChars(length, string) {
  var returnString = '';
  if (length > string.length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    returnString += string[i];
  } return returnString;
}
