/* exported capitalizeWord */
/* define the new function "capitalizeWord" with 1 parameter (word)
assign an empty string to the return string
set all parameter's letters to lowercase
return the correct casing of javascript no matter what
if it is not javascript
take the first index of word and upper case it then uppercase the rest of the word
return the return string */
function capitalizeWord(word) {
  var returnString = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    returnString += word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  return returnString;
}
