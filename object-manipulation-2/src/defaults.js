/* exported defaults */
// define function defaults with two parameters target and source
function defaults(target, source) {
  // go through each source object and take its key
  for (var sourceKey in source) {
    // check to see if the target does not have the sourcekey
    if (!(sourceKey in target)) {
      // if it doesn't add the key value to target using sourcekey as the key and its value from source.
      target[sourceKey] = source[sourceKey];
    }
  }
}
