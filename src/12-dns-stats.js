/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  domains.forEach((element) => {
    const arr = element.split('.').reverse();

    let key = '';
    for (let i = 0; i < arr.length; i++) {
      key += `.${arr[i]}`;

      obj[key] = obj[key] ? (obj[key] += 1) : 1;
      // console.log(obj);
      // console.log(obj[key]);
    }
  });
  return obj;
}

module.exports = getDNSStats;
