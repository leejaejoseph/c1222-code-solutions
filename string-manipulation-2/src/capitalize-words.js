/* exported capitalizeWords */
// define the new function "capitalizeWords" with 1 parameter (string)
function capitalizeWords(string) {
  // assign an empty string to the return string
  var returnString = '';
  // assign an empty string to the return string
  var stringCollector = '';
  // set a variable to know if its the first letter of the string
  var firstLetter = true;
  // run a for loop through the length of the entire string and when met
  for (var i = 0; i < string.length; i++) {
    // check if the string at index is a space ' '
    if (string.charAt(i) === ' ') {
      // concatenate what is in the stringCollector and the value of string at index i
      returnString += stringCollector + string.charAt(i);
      // change the value of first Letter to true
      firstLetter = true;
      // reset the string collector to an empty string
      stringCollector = '';
    // since the string at index is not a ' ' check if firstLetter is true
    } else if (firstLetter === true) {
      // concatenate to the return string the uppercase of string at index i
      stringCollector += string.charAt(i).toUpperCase();
      // set the next letter to be undercase by setting first letter to be false
      firstLetter = false;
      // the only else statement means that char is not a space nor the first letter of a word
    } else {
      // concatenate to the return string the lowercase of string at index i
      stringCollector += string.charAt(i).toLowerCase();
    }
  }
  // concatenate the last string collector to the return string
  returnString += stringCollector;
  // return the return string
  return returnString;
}

/*
  same thing but less comparisons.

  for (var i = 0; i < string.length; i++) {
    // check if the character is not a space and if it firstLetter is true
    if ((string.charAt(i) !== ' ') && (firstLetter === true)) {
      // concatenate to the return string the uppercase of string at index i
      stringCollector += string.charAt(i).toUpperCase();
      // set the next letter to be undercase by setting first letter to be false
      firstLetter = false;
    // check if the character is not a space and if it firstLetter is false
    } else if ((string.charAt(i) !== ' ') && (firstLetter === false)) {
      // concatenate to the return string the lowercase of string at index i
      stringCollector += string.charAt(i).toLowerCase();
    // the only else statement means that the
    } else {
      // concatenate what is in the stringCollector and the value of string at index i
      returnString += stringCollector + string.charAt(i);
      // change the value of first Letter to true
      firstLetter = true;
      // reset the string collector to an empty string
      stringCollector = '';
    }
  }
  // return the return string
  returnString += stringCollector;
  return returnString;
}
*/
