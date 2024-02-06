//* Immediately Invoked Function Expression 立即調用函式
//* 廣義來說也是儲存閉包的環境狀態的作法，在執行 setTimeout 的同時，會將當下的 i 鎖起來，延長它的生命。

for (var i = 0; i < 5; i++) {
  (function (i) {
    window.setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  })(i);
}
