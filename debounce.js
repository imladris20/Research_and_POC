const debounce = (cbfn, delay) => {
  let timer;

  function inner(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cbfn(...args);
    }, delay);
  }

  return inner;
};

const add = (a, b) => {
  return a + b;
};

const debounceAdd = debounce(add, 1000);
