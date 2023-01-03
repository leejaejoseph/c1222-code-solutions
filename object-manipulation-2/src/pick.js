/* exported pick */
/* define function pick with two parameters source and keys
create a return object holding a new object with key values passed from keys
create a loop through the keys array
check if value of keys at index exists and if its not undefined
it will add a key value pair in the return objects using keys at index for keys and the value of keys at index in source.
return the return object. */
function pick(source, keys) {
  var returnObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      returnObject[keys[i]] = source[keys[i]];
    }
  } return returnObject;
}
