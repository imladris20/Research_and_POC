const arr = [];
const number = 29;
const str = "twice";
const obj = { name: "mina" };
function foo() {
  console.log("foo");
}
const map = new Map([["name", "tzuyu"]]);

console.log(`arr.prototype: ${arr.prototype}`);
console.log(`number.prototype: ${number.prototype}`);
console.log(`str.prototype: ${str.prototype}`);
console.log(`obj.prototype: ${obj.prototype}`);
console.log(`foo.prototype: ${foo.prototype}`);
console.log(`map.prototype: ${map.prototype}`);

console.log(`arr.__proto__: ${arr.__proto__}`);
console.log(`number.__proto__: ${number.__proto__}`);
console.log(`str.__proto__: ${str.__proto__}`);
console.log(`obj.__proto__: ${obj.__proto__}`);
console.log(`foo.__proto__: ${foo.__proto__}`);
console.log(`map.__proto__: ${map.__proto__}`);

console.log(`Object.getPrototypeOf(arr): ${Object.getPrototypeOf(arr)}`);
console.log(`Object.getPrototypeOf(number): ${Object.getPrototypeOf(number)}`);
console.log(`Object.getPrototypeOf(str): ${Object.getPrototypeOf(str)}`);
console.log(`Object.getPrototypeOf(obj): ${Object.getPrototypeOf(obj)}`);
console.log(`Object.getPrototypeOf(foo): ${Object.getPrototypeOf(foo)}`);
console.log(`Object.getPrototypeOf(map): ${Object.getPrototypeOf(map)}`);
