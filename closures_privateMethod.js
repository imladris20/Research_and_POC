//* 以下每個閉包，都有各自的環境。
//* 即使如此，透過閉包仍成功建立了一個被三個函式共享的環境：counter.increment、counter.decrement、counter.value。
//* 這三個公有函式，皆為共享同一個環境的閉包。由於 JavaScript 的語法作用域，它們都能訪問 privateCounter 變數與 changeBy 函式。
//! 你可以發現：變數 privateCounter 與函式 changeBy。這兩個私有設都無法在匿名函式外存取。

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
