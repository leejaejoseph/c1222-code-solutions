/* exported ransomCase */
/* define the new function "ransom case" with 1 parameter (string)
assign an empty string to the return string
set a var that determines if its uppercase or lowercase starting with lowercase
set a for loop to run through the length of the string
set condition where condition meeting lowercase will concatenate to return string the string at index as lowercase
concatenate the string at the initialized index with its lower case
change the value of the upperOrLower to uppercase
set condition where condition meeting uppercase will concatenate to return string the string at index as uppercase
concatenate the string at the initialized index with its upper case
change the value of the upperOrLower to uppercase
return the return string */
function ransomCase(string) {
  var returnString = '';
  var upperOrLower = 'lowercase';
  for (var i = 0; i < string.length; i++) {
    if (upperOrLower === 'lowercase') {
      returnString += string.charAt(i).toLowerCase();
      upperOrLower = 'uppercase';
    } else if (upperOrLower === 'uppercase') {
      returnString += string.charAt(i).toUpperCase();
      upperOrLower = 'lowercase';
    }
  } return returnString;
}
