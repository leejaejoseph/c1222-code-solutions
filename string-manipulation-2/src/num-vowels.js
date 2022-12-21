/* exported numVowels */
// define the new function "numVowels" with 1 parameter (string)
function numVowels(string) {
  // assign a return counter incrementing per vowel found
  var vowelCounter = 0;
  // make a variable to lowercase the string argument
  var lowerCased = string.toLowerCase();
  // go through entirety of string taking variable I as an index
  for (var i in lowerCased) {
    // using the lowercased variable, check to see if the variable and the index is a, e, i, o, or u
    if (lowerCased[i] === 'a' || lowerCased[i] === 'e' || lowerCased[i] === 'i' || lowerCased[i] === 'o' || lowerCased[i] === 'u') {
      // if statement is true, increment return counter
      vowelCounter++;
    } // else pass through
  // return the return counter.
  } return vowelCounter;
}
