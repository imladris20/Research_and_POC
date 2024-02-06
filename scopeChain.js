//!  範圍鏈是在函式被定義的當下決定的，不是在被呼叫的時候決定。

// console.log("Third b:", b);

function outer() {
  b = a * 2;

  console.log("first b: ", b);

  function inner(c) {
    console.log("a,b,c:", a, b, c);
  }

  inner(b * 3);
}

const a = 1;
outer(a);

console.log("second b:", b);
