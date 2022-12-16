/* exported isLowerCased */
// define a function named isLowerCased with 1 parameter word taking the string
function isLowerCased(word) {
  // take the argument and loop through its length to see each letter
  for (var i = 0; i < word.length; i++) {
    // check to see if the indexed value is not lowercased
    if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
      // return false if condition sees UpperCased Value
      return false;
    }
    // return true because the loop didnt find any UpperCased letter.
  } return true;
}
