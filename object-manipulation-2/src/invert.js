/* exported invert */
// define function invert with one parameter source
function invert(source) {
  // create a return object holding reversed key and object
  var returnObject = {};
  // loop through source and take its keyvalue into the variable key
  for (var key in source) {
    // create a variable to store its value utilizing its key
    var value = source[key];
    // append to the return object the reverse with its key being the stored value variable and its value being the key
    returnObject[value] = key;
  }
  // return the return object
  return returnObject;
}
