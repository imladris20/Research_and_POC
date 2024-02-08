//! 為什麼閉包是一件神奇的事情？
//* 因為照理說，一個 function 執行完成以後本來會把所有相關的資源釋放掉。
//* 但是 init 已經執行結束了。照理來說變數 message 的記憶體空間也應該被釋放，但我呼叫 inner 時居然還是存取得到 message！
//* message 這個變數已經被「關在」 inner 這個 function 裡面了，所以只要 inner 還存在的一天，message 就只能一直被關在裡面。
function init() {
  let message = "JSClosures";

  function inner() {
    console.log(message);
  }
  return inner;
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
