//* 把 count 封裝在 counter() 當中
//* 不但可以讓裡面的 count 不會暴露在 global 環境造成變數衝突，也可以確保內部 count 被修改。
//* 會發現 countFunc 與 countFunc2 分別是「獨立」的計數器實體，彼此不會互相干擾！

function counter() {
  var count = 0;

  function innerCounter() {
    return ++count;
  }

  return innerCounter;
}

var countFunc = counter();
var countFunc2 = counter();

console.log(countFunc()); // 1
console.log(countFunc()); // 2
console.log(countFunc()); // 3

console.log(countFunc2()); // 1
console.log(countFunc2()); // 2

//! 一次簡化後
function counterSimpler() {
  var count = 0;

  return function () {
    return ++count;
  };
}

//! 二次簡化後
const counterSimplest = () => {
  var count = 0;
  return () => ++count;
};
