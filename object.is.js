const a = "10";
const b = "10";

const c = ["mina", "sana", "momo"];
const d = ["mina", "sana", "momo"];

const e = { name: "PoLien", age: 26 };
const f = { name: "PoLien", age: 26 };

console.log(Object.is(a, b));
console.log(Object.is(c, d));
console.log(Object.is(e, f));
