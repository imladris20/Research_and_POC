function throttle(cbfn, delay) {
  let timer = null;

  function inner(...args) {
    if (!timer) {
      cbfn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }

  return inner;
}

const add = (a, b) => {
  return a + b;
};

const throttledAdd = throttle(add, 1000);

throttledAdd(5, 10);
