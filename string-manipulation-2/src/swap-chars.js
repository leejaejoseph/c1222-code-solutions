/* exported swapChars */
/* define the new function "swapChars" with 3 parameters (firstindex, second index and string)
set a variable to an empty return string
set a for loop to go through all the indexes of the string
set condition where if initialization var is equal to first param index,
concatenate the string at opposing index to return string
set condition where if initialization var is equal to second param index,
concatenate the string at opposing index to return string
concatenate the string at index to return string
return return string */
function swapChars(firstIndex, secondIndex, string) {
  var returnString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      returnString += string[secondIndex];
    } else if (i === secondIndex) {
      returnString += string[firstIndex];
    } else {
      returnString += string[i];
    }
  } return returnString;
}
