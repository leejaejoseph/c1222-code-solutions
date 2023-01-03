/* exported isVowel */
/* check to see if char at a lowercased value for homogeneity is not a e i o or u
if condition met return true
if it doesn't match the vowels, it is not a vowel
return false because it did not match the previous conditions. */
function isVowel(char) {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true;
  } else {
    return false;
  }
}
