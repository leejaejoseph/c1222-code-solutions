/* exported omit */
/* define function omit with two parameters source and keys
create a return object holding a new object with key values passed from keys
loop through source and take its keyvalue into the variable key
loop through the keys array to compare the variable key to the indexed array
if the variable key matches, end the loop and go to the next key in source
if the loop reached its final length without matching variable key with array indexed key,
append the key to the return object with its key value
a hidden else of it not being found in the previous key is set so it loops through the entire key array without appending early
return the return object */
function omit(source, keys) {
  var returnObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        break;
      } else if (i === keys.length - 1) {
        returnObject[key] = source[key];
      }
    }
  } return returnObject;
}
