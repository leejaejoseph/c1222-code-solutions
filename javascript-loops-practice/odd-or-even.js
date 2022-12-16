/* exported oddOrEven */
function oddOrEven(numbers) {
  var returnArray = [];
  var i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      returnArray.push('even');
    } else {
      returnArray.push('odd');
    }
    i++;
  } return returnArray;
}
