/* exported ransomCase */
// define the new function "ransom case" with 1 parameter (string)
function ransomCase(string) {
  // assign an empty string to the return string
  var returnString = '';
  // set a var that determines if its uppercase or lowercase starting with lowercase
  var upperOrLower = 'lowercase';
  // set a for loop to run through the length of the string
  for (var i = 0; i < string.length; i++) {
    // set condition where condition meeting lowercase will concatenate to return string the string at index as lowercase
    if (upperOrLower === 'lowercase') {
      // concatenate the string at the initialized index with its lower case
      returnString += string.charAt(i).toLowerCase();
      // change the value of the upperOrLower to uppercase
      upperOrLower = 'uppercase';
    // set condition where condition meeting uppercase will concatenate to return string the string at index as uppercase
    } else if (upperOrLower === 'uppercase') {
      // concatenate the string at the initialized index with its upper case
      returnString += string.charAt(i).toUpperCase();
      // change the value of the upperOrLower to uppercase
      upperOrLower = 'lowercase';
    } // return the return string
  } return returnString;
}
