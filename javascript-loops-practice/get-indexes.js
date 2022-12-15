/* exported getIndexes */
function getIndexes(array) {
  var index = [];
  var i = 0;
  while (i < array.length) {
    index.push(i);
    i++;
  }
  return index;
}
