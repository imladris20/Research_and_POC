const origin1 = new Array(5).fill(undefined);
const origin2 = new Array(5);
const origin3 = [...Array(5)];

const arr1 = origin1.map((_, index) => index);
const arr2 = origin2.map((_, index) => index);
const arr3 = origin3.map((_, index) => index);

const arr4 = [1];
arr4.length = 5;

const arr5 = Array.from({ length: 5 }, () => "empty");

//* 猜猜以下五個console.log結果會是如何
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);
console.log("arr5:", arr5);
