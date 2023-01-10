/* exported getWords */
/* define a function named getWords with one string parameters
search for whether string has no words
return empty array if no words are found
define a new variable and set it equal to the argument being split up to chunks per finding an spaced string
return the new variable with separated strings in an array from the function. */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  var wordsArray = string.split(' ');
  return wordsArray;
}
