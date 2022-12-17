/* exported capitalizeWord */
// define the new function "capitalizeWord" with 1 parameter (word)
function capitalizeWord(word) {
  // assign an empty string to the return string
  var returnString = '';
  // set all parameter's letters to lowercase
  if (word.toLowerCase() === 'javascript') {
  // return the correct casing of javascript no matter what
    return 'JavaScript';
  // if it is not javascript
  } else {
    // take the first index of word and upper case it then uppercase the rest of the word
    returnString += word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  // return the return string
  return returnString;
}
