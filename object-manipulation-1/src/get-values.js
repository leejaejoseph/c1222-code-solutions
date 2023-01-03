/* exported getValues */
/* define a function named getValues with 1 parameter (object)
set an empty array to a return variable
run a for in loop going through every key in the object
push the value from the key "keys" of object "object" into the return Array
return the value of the return Array from the function */
function getValues(object) {
  var returnArray = [];
  for (var keys in object) {
    returnArray.push(object[keys]);
  }
  return returnArray;
}
