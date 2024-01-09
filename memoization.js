//*  HOF版memo

const memo = (cbFunction) => {
  let cache = {};
  function inner(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const res = cbFunction(...args);
    cache[args] = res;

    return res;
  }
  return inner;
};

const normalAdd = (a, b) => {
  console.log("It didn't memo.");
  return a + b;
};

const normalCalculate = (a, b, c, d) => {
  return (a + b) * c - d;
};

const memoAdd = memo(normalAdd);
const memoCalculate = memo(normalCalculate);

console.log(memoAdd(3, 5));
console.log(memoAdd(3, 5));
console.log(memoAdd(3, 5));

console.log(memoCalculate(3, 5, 5, 5));
console.log(memoCalculate(3, 5, 5, 5));
console.log(memoCalculate(3, 5, 5, 5));
