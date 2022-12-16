/* exported toObject */
// define a function named toObject with 1 parameter (keyValuePair) which is an array with 2 elements
function toObject(keyValuePair) {
  // set an empty object to a return variable
  var returnObject = {};
  /* set the key for returnObject with first index of the parameter then
  assign the value of the parameter's second index value to said key */
  returnObject[keyValuePair[0]] = keyValuePair[1];
  // return the value of the return Object from the function
  return returnObject;
}
