const arguments = [1, 2, 3];

//* 一般函式的 arguments 就會是傳進去的參數依序組成的陣列
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
