const change = (obj) => {
  obj.number++;
};

const twice = {
  number: 9,
};

console.log(twice);
change(twice);
console.log(twice);

//* 以上的內容我們應該都相當熟悉，由於object是call by reference，所以經過change後的twice會變成是number: 10
//* 但真的是這樣嗎？來看看以下的modify 吧

const modify = (obj) => {
  console.log("beginning of modify", obj);
  obj = {
    number: 100,
  };
  console.log("inside modify", obj);
};

//! 從變數 twice並沒有任何改變可以發現，JavaScript 的物件其實是更接近 call by "sharing" 而不是 call by "reference"
console.log(twice);
modify(twice);
console.log(twice);
