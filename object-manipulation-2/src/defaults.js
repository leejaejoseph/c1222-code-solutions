/* exported defaults */
/* define function defaults with two parameters target and source
go through each source object and take its key
check to see if the target does not have the sourcekey
if it doesn't add the key value to target using sourcekey as the key and its value from source. */
function defaults(target, source) {
  for (var sourceKey in source) {
    if (!(sourceKey in target)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
