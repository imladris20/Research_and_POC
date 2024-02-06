function init() {
  let message = "JSClosures";

  function fireMessage() {
    console.log(message);
  }
  return fireMessage;
}

const print = init();

print();

//* add5 與 add10 都是閉包。他們共享函式的定義，卻保有不同的環境
//* 在 add5 的作用域環境，base 是 5。而在 add10 的作用域環境， base 則是 10。

function makeAdder(base) {
  function inner(input) {
    return base + input;
  }

  return inner;
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
