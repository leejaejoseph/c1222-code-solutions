/* exported capitalize */
/* defining function taking single parameter, word, with string datatype.
make a return variable to hold the first letter and uppercase it
loop through rest of word starting from the second letter and lowercase it
set initialization on the index after first letter, make the condition stop at the full length of the string and final express it with an increment of 1
take the index of the word at the for loop's initialization and lowercase it and concatenate it to the word.
return the return variable */
function capitalize(word) {
  var capitalizedWord = word.charAt(0).toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word.charAt(i).toLowerCase();
  }
  return capitalizedWord;
}
