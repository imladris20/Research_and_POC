const arguments = [1, 2, 3];

//* 一般函式的 arguments 就會是傳進去的參數依序組成的類陣列
//! 請注意，arguments並不是真的陣列，是一個 array-like object
function foo(x, y, z = 9) {
  console.log(arguments[2]);
  console.log(arguments);
  console.log(z);
  const f = function () {
    console.log(arguments);
    return arguments[1] + x + y + z;
  };
  return f();
}
console.log(foo(3, 6));

//* Array methods can be used on rest parameters, but not on the arguments object
//! 由於不是真的陣列，所以不能使用 array methods，除非先把 arguments array 化
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — or —
  const normalArray2 = [].slice.call(arguments);
  // — or —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}

//* 箭頭函式的arguments 則不存在，即使確實有參數也不會列出來
const bar = (a, b) => {
  console.log(arguments);
  return arguments + a + b;
};

console.log(bar(3, 6));

//* 想使用箭頭函式但同時可以使用arguments，可改為採用其餘參數 (rest parameter)
//! 不要跟spread operator 搞混了
const foobar = (...args) => {
  console.log(args);
  return args.reduce((a, b) => a + b);
};

console.log(foobar(3, 6));
