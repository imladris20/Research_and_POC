//! 閉包的常見優點：把變數隱藏在裡面讓外部存取不到

//* 不用閉包，my_balance 全域都能存取
var myBalance = 999;
function deduct(n) {
  myBalance -= n > 10 ? 10 : n; // 超過 10 塊只扣 10 塊
}

deduct(13); // 只被扣 10 塊
console.log(myBalance);
deduct(7); // 只被扣 10 塊
console.log(myBalance);
myBalance -= 999; // 還是被扣了 999 塊
console.log(myBalance);

//* 使用閉包，myNewBalance 無法存取，想要修改只能夠利用唯一暴露出去的 deduct 這個函式
function getWallet() {
  var myNewBalance = 999;
  return {
    deduct: function (n) {
      myNewBalance -= n > 10 ? 10 : n; // 超過 10 塊只扣 10 塊
    },
  };
}

var wallet = getWallet();
wallet.deduct(13); // 只被扣 10 塊
myNewBalance -= 999; // Uncaught ReferenceError: myNewBalance is not defined
console.log(myNewBalance); // Uncaught ReferenceError: myNewBalance is not defined
