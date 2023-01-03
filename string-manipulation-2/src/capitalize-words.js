/* exported capitalizeWords */
/* define the new function "capitalizeWords" with 1 parameter (string)
assign an empty string to the return string
assign an empty string to the return string
set a variable to know if its the first letter of the string
run a for loop through the length of the entire string and when met
check if the string at index is a space ' '
concatenate what is in the stringCollector and the value of string at index i
change the value of first Letter to true
reset the string collector to an empty string
since the string at index is not a ' ' check if firstLetter is true
concatenate to the return string the uppercase of string at index i
set the next letter to be undercase by setting first letter to be false
the only else statement means that char is not a space nor the first letter of a word
concatenate to the return string the lowercase of string at index i
concatenate the last string collector to the return string
return the return string */
function capitalizeWords(string) {
  var returnString = '';
  var stringCollector = '';
  var firstLetter = true;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ') {
      returnString += stringCollector + string.charAt(i);
      firstLetter = true;
      stringCollector = '';
    } else if (firstLetter === true) {
      stringCollector += string.charAt(i).toUpperCase();
      firstLetter = false;
    } else {
      stringCollector += string.charAt(i).toLowerCase();
    }
  }
  returnString += stringCollector;
  return returnString;
}
