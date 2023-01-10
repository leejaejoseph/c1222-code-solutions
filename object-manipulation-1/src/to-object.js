/* exported toObject */
/* define a function named toObject with 1 parameter (keyValuePair) which is an array with 2 elements
set an empty object to a return variable
set the key for returnObject with first index of the parameter then assign the value of the parameter's second index value to said key
return the value of the return Object from the function */
function toObject(keyValuePair) {
  var returnObject = {};
  returnObject[keyValuePair[0]] = keyValuePair[1];
  return returnObject;
}
