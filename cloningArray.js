const original = ["Mina", "Sana", "Momo"];

//* 由於 Array 是 call by reference，如此賦值將會是讓failedCopy也指向與original同樣的記憶體位置
//* 一旦修改 failedCopy 就等於是在改original
const failedCopy = original;
failedCopy[3] = "Chaeyoung";

console.log(original);
console.log(failedCopy);
console.log(failedCopy === original);

//* 拷貝方法一：利用loop 土炮拷貝
//! 淺拷貝，只會copy到第一層
const copy1 = [];

for (let i = 0; i < original.length; i++) {
  copy1.push(original[i]);
}

copy1[3] = "Nayeon";

console.log(original);
console.log(copy1);
console.log(copy1 === original);

//* 拷貝方法二：.slice() 中不填入任何參數
//! 淺拷貝，只會copy到第一層
const copy2 = original.slice();
copy2[3] = "tzuyu";

console.log(original);
console.log(copy2);
console.log(copy2 === original);

//* 拷貝方法三：[].concat(原陣列)
//! 淺拷貝，只會copy到第一層
const copy3 = [].concat(original);
copy3[3] = "Jeongyeon";

console.log(original);
console.log(copy3);
console.log(copy3 === original);

//* 拷貝方法四：spread operator
//! 淺拷貝，只會copy到第一層
const copy4 = [...original];
copy4[3] = "Jihyo";

console.log(original);
console.log(copy4);
console.log(copy4 === original);

//* 拷貝方法五：Array.from(原陣列)
//! 淺拷貝，只會copy到第一層
const copy5 = Array.from(original);
copy5[3] = "Dahyun";

console.log(original);
console.log(copy5);
console.log(copy5 === original);

//* 拷貝方法六：JSON.parse(JSON.stringify(原陣列))
//! 深拷貝，巢狀結構也會改變reference

const copy6 = JSON.parse(JSON.stringify(original));

console.log(original);
console.log(copy6);
console.log(copy6 === original);
