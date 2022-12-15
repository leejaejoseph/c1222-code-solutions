/* exported filterOutNulls */
function filterOutNulls(values) {
  var i = 0;
  var filteredArray = [];
  while (i < values.length) {
    if (values[i] === null) {
      i++;
    } else {
      filteredArray.push(values[i]);
      i++;
    }
  } return filteredArray;
}
