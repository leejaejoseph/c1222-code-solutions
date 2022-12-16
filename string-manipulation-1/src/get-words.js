/* exported getWords */
// define a function named getWords with one string parameters
function getWords(string) {
  // search for whether string has no words
  if (string.length === 0) {
    // return empty array if no words are found
    return [];
  }
  // define a new variable and set it equal to the argument being split up to chunks per finding an spaced string
  var wordsArray = string.split(' ');
  // return the new variable with separated strings in an array from the function.
  return wordsArray;
}
