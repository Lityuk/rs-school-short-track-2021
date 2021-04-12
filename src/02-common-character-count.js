/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// !!!!!!!!!!!!! WTF ???
// function getCommonCharacterCount(s1, s2) {
//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (s2.includes(s1[i])) {
//       count++;
//       s2.replace(s1[i], '');
//     }
//   }
//   return count;
// }

function getCommonCharacterCount(s1, a2) {
  const str1 = s1.split('');
  const str2 = a2.split('');
  let count = 0;
  str1.forEach((element) => {
    let id = str2.indexOf(element);
    if (id !== -1) {
      str2.splice(id, 1);
      count++;
    }
    id = str2.indexOf(element, id + 1);
  });
  return count;
}

module.exports = getCommonCharacterCount;
