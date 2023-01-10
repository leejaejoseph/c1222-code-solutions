/* exported getKeys */
/* define a function named getKeys with 1 parameter (object)
set an empty array to a return variable
run a for in loop going through every key in the object
push the keys into the return Array
return the value of the return Array from the function */
function getKeys(object) {
  var returnArray = [];
  for (var keys in object) {
    returnArray.push(keys);
  }
  return returnArray;
}
