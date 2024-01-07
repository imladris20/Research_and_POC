// construcotr 的共享屬性
function CakeF(flavor) {
  this.flavor = flavor;
}

CakeF.prototype = {
  price: function (cost) {
    return `NTD ${cost * 1.5}`;
  },
};

console.log(CakeF);
console.dir(CakeF);
let cake1 = new CakeF("cream");
console.log("cake1 price", cake1.price(50));

// class 將共享的 method 寫在 class 內
class CakeC {
  constructor(flavor) {
    this.flavor = flavor;
  }
  price(cost) {
    return `NTD ${cost * 1.5}`;
  }
}

let cake2 = new CakeC("choco");
console.log("cake2 price", cake2.price(50));

console.dir(CakeC);
