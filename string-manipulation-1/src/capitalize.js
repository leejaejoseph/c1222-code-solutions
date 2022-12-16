/* exported capitalize */
// defining function taking single parameter, word, with string datatype.
function capitalize(word) {
  /* 1) strings are immutable */
  // make a return variable to hold the first letter and uppercase it
  var capitalizedWord = word.charAt(0).toUpperCase();
  // loop through rest of word starting from the second letter and lowercase it
  /* set initialization on the index after first letter, make the condition stop
  at the full length of the string and final express it with an increment of 1  */
  for (var i = 1; i < word.length; i++) {
    // take the index of the word at the for loop's initialization and lowercase it and concatenate it to the word.
    capitalizedWord += word.charAt(i).toLowerCase();
  }
  // return the return variable
  return capitalizedWord;
}
