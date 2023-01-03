/* exported numVowels */
/* define the new function "numVowels" with 1 parameter (string)
assign a return counter incrementing per vowel found
make a variable to lowercase the string argument
go through entirety of string taking variable I as an index
using the lowercased variable, check to see if the variable and the index is a, e, i, o, or u
if statement is true, increment return counter
else pass through
return the return counter. */
function numVowels(string) {
  var vowelCounter = 0;
  var lowerCased = string.toLowerCase();
  for (var i in lowerCased) {
    if (lowerCased[i] === 'a' || lowerCased[i] === 'e' || lowerCased[i] === 'i' || lowerCased[i] === 'o' || lowerCased[i] === 'u') {
      vowelCounter++;
    }
  } return vowelCounter;
}
