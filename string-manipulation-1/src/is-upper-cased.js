/* exported isUpperCased */
/* define a function named isUpperCased with 1 parameter word taking the string
take the argument and loop through its length to see each letter
check if letter is lowercased and if so return false
return false if condition is met
return true because the loop didnt find any lowercased letter.
*/
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === word.charAt(i).toLowerCase()) {
      return false;
    }
  } return true;
}
