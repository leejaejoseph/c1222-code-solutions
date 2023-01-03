/* exported isLowerCased */
/* define a function named isLowerCased with 1 parameter word taking the string
take the argument and loop through its length to see each letter
check to see if the indexed value is not lowercased
return false if condition sees UpperCased Value
return true because the loop didnt find any UpperCased letter. */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
      return false;
    }
  } return true;
}
