function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const newElement = fn.call(this, ...args);
    cache[key] = newElement;
    return cache[key];
  };
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(0, 0); // 0
memoizedFn(0, 0); // 0
console.log(callCount); // 1
