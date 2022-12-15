/* exported countdown */
function countdown(number) {
  var array = [];
  for (number; number > -1; number--) {
    array.push(number);
  }
  return array;
}
