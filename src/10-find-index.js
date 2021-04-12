/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(array, value) {
//   array.forEach((element, index) => (element === value ? index : false));
// }

// !!!! Ручной поиск!

function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const result = Math.floor((start + end) / 2);
    if (array[result] === value) {
      return result;
    }
    if (array[result] < value) {
      start = result + 1;
    } else {
      end = result - 1;
    }
  }
  return false;
}

module.exports = findIndex;
