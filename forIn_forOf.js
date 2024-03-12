const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const arr = ["mina", 1, true];

// for ... in ... 迴圈跑物件
for (const key in obj) {
  console.log("for in 物件", key); // 輸出：a, b, c
}

for (const key in arr) {
  console.log("for in 陣列", key); // 輸出：a, b, c
}

for (const value of arr) {
  console.log("for of 陣列", value);
}

// for ... of ... 迴圈跑物件
for (const value of obj) {
  console.log("for of 物件", value); // 輸出：TypeError: obj is not iterable
}
