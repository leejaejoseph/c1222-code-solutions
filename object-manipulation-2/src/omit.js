/* exported omit */
// define function omit with two parameters source and keys
function omit(source, keys) {
  // create a return object holding a new object with key values passed from keys
  var returnObject = {};
  // loop through source and take its keyvalue into the variable key
  for (var key in source) {
    // loop through the keys array to compare the variable key to the indexed array
    for (var i = 0; i < keys.length; i++) {
      // if the variable key matches, end the loop and go to the next key in source
      if (keys[i] === key) {
        break;
      // if the loop reached its final length without matching variable key with array indexed key,
      } else if (i === keys.length - 1) {
      // append the key to the return object with its key value
        returnObject[key] = source[key];
      } // a hidden else of it not being found in the previous key is set so it loops through the entire key array without appending early

    }
  // return the return object
  } return returnObject;
}
