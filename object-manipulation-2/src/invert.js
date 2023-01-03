/* exported invert */
/* define function invert with one parameter source
create a return object holding reversed key and object
loop through source and take its keyvalue into the variable key
create a variable to store its value utilizing its key
append to the return object the reverse with its key being the stored value variable and its value being the key
return the return object */
function invert(source) {
  var returnObject = {};
  for (var key in source) {
    var value = source[key];
    returnObject[value] = key;
  }
  return returnObject;
}
