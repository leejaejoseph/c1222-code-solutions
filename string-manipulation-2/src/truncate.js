/* exported truncate */
/* define the new function "truncate" with 2 parameters (length and string)
assign an empty string to the return string
run a for loop from initialization 0 until the length and increment by 1
check to see if string is undefined
if the string is empty, break the loop
concatenate the string at initialized index to the return string
concatenate 3 an ellipsis
return the return string
*/
function truncate(length, string) {
  var returnString = '';
  for (var i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    }
    returnString += string[i];
  }
  returnString += '...';
  return returnString;
}
