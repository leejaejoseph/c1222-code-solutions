/* exported pick */
// define function pick with two parameters source and keys
function pick(source, keys) {
  // create a return object holding a new object with key values passed from keys
  var returnObject = {};
  // create a loop through the keys array
  for (var i = 0; i < keys.length; i++) {
    // check if value of keys at index exists and if its not undefined
    if (source[keys[i]] !== undefined) {
      // it will add a key value pair in the return objects using keys at index for keys and the value of keys at index in source.
      returnObject[keys[i]] = source[keys[i]];
    } // return the return object.
  } return returnObject;
}
