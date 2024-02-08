//! JS 是一行一行跑的，但執行到第六行的時候明明還沒有宣告變數 a
//! 那為什麼不是拋出 a is not defined 的錯誤，而是成功輸出了undefined？
//! 這種現象就叫做 hoisting，提升
//! 還有兩點要特別注意
//! 1. 只有變數的宣告會提升，賦值不會，所以第8行會是 undefined
//! 2. Function 的提昇會優先於變數，因此第9行會是 [Function: b]

console.log(a); //* undefined
console.log(b); //* [Function: b]
console.log(c); //* c is not defined
console.log(d); //* cannot access 'd' before initialization

var a;
a = 10;
var b;
c = a * 2;
let d = 29;
function b() {}
var b = 15;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var a;
a = 10;
var b;
c = a * 2;
let d = 29;
function b() {}
var b = 15;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/
