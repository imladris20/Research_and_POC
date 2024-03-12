/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  const mapped = [];

  arr.forEach((element, index) => {
    mapped.push(fn(element, index));
  });
  return mapped;
};

map([1, 2, 3], function plusone(n) {
  return n + 1;
});
map([1, 2, 3], function constant() {
  return 45;
});
map([1, 2, 3], function plusIndex(n, i) {
  return n + i;
});

function constant() {
  return 45;
}

console.log(constant("yes", "no", "no"));
