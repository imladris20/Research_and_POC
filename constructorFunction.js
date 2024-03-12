//! 寫法一
function betterWayToConstructCellphone(brand) {
  this.brand = brand;
}

betterWayToConstructCellphone.prototype.getBrand = function () {
  return this.brand;
};

//! 寫法二
function anotherWayToConstructCellphone(brand) {
  this.brand = brand;
  this.getBrand = function () {
    return this.brand;
  };
}

//*   寫法一比寫法二好的地方在於，寫法二每次創建一個新的 Cellphone 實例時，都會創建一個新的 getBrand 方法的實例。
//*   雖然這種方法在大多數情況下不會導致性能問題，但如果創建大量的 Cellphone 實例，這可能會導致記憶體使用量增加。
//*   寫法一則是讓所有的 Cellphone 實例都會共享同一個 getBrand 方法的實例，而不是每個實例都有自己的 method 實例。這種方法更有效率，因為它減少了記憶體的使用量。
//*   但並非所有的屬性都這樣添加上去就比較好，例如 brand就不能這樣，因為這樣就會讓所有實例都沒有區別

let newIPhone = new betterWayToConstructCellphone("Apple");
let newPixelPhone = new betterWayToConstructCellphone("Google");

console.log(newIPhone.brand);
console.log(newIPhone.getBrand()); // Apple
console.log(newIPhone.brand);
console.log(newPixelPhone.getBrand()); // Google

//! 寫法三：利用 class 語法糖
class Cellphone {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

let newZenfone = new Cellphone("ASUS");
console.log(newZenfone.brand);
console.log(newZenfone.getBrand());
