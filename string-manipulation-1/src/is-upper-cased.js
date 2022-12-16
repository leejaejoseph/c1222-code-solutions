/* exported isUpperCased */
// define a function named isUpperCased with 1 parameter word taking the string
function isUpperCased(word) {
  // take the argument and loop through its length to see each letter
  for (var i = 0; i < word.length; i++) {
  // check if letter is lowercased and if so return false
    if (word.charAt(i) === word.charAt(i).toLowerCase()) {
    // return false if condition is met
      return false;
    }
  // return true because the loop didnt find any lowercased letter.
  } return true;
}
