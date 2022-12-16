/* exported isVowel */
// define a function named is vowel take a single character lengthed string
function isVowel(char) {
  // check to see if char at a lowercased value for homogeneity is not a e i o or u
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
  // if condition met return true
    return true;
  // if it doesn't match the vowels, it is not a vowel
  } else {
    // return false because it did not match the previous conditions.
    return false;
  }
}
