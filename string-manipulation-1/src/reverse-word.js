/* exported reverseWord */
/* define a function named reverseWord with a parameter(words) taking a string
define a variable to contain the return string
run through the whole word in reverse order by going backword of its full index using a for loop from its length to the 0th index
the initialization will start at the length minus 1 for correct index, and will go until it reaches -1 index so it includes the 0th index letter
concatenate the words at i index that is going backwards into returnString
return the variable containing the reversed letters.
*/
function reverseWord(words) {
  var returnString = '';
  for (var i = words.length - 1; i > -1; i--) {
    returnString += words[i];
  }
  return returnString;
}
