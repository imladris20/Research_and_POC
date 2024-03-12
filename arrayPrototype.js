const twiceForeignLine = ["mina", "momo", "sana", "tzuyu"];

const same = new Array(...twiceForeignLine);

console.log(
  "typeof twiceForeignLine: ",
  typeof twiceForeignLine,
  twiceForeignLine
);
console.log("typeof same: ", typeof same, same);

//! 分隔一下
console.log("==============================");

console.log("same.__proto__: ", same.__proto__);
console.log("same.__proto__.__proto__: ", same.__proto__.__proto__);
console.log(
  "same.__proto__.__proto__.__proto__: ",
  same.__proto__.__proto__.__proto__
);
console.log("same.prototype: ", same.prototype);
console.log("Object.getPrototypeOf(same): ", Object.getPrototypeOf(same));

console.log(
  "Object.is(same.prototype, same.__proto__): ",
  Object.is(same.prototype, same.__proto__)
);
console.log(
  "Object.is(same.prototype, Object.getPrototypeOf(same)): ",
  Object.is(same.prototype, Object.getPrototypeOf(same))
);
console.log(
  "Object.is(same.__proto__, Object.getPrototypeOf(same): ",
  Object.is(same.__proto__, Object.getPrototypeOf(same))
);

//! 分隔一下
console.log("=============================");

console.log("twiceForeignLine.__proto__: ", twiceForeignLine.__proto__);
console.log(
  "twiceForeignLine.__proto__.__proto__: ",
  twiceForeignLine.__proto__.__proto__
);
console.log(
  "twiceForeignLine.__proto__.__proto__.__proto__: ",
  twiceForeignLine.__proto__.__proto__.__proto__
);
console.log("twiceForeignLine.prototype: ", twiceForeignLine.prototype);
console.log(
  "Object.getPrototypeOf(twiceForeignLine): ",
  Object.getPrototypeOf(twiceForeignLine)
);

console.log(
  "Object.is(twiceForeignLine.prototype, twiceForeignLine.__proto__): ",
  Object.is(twiceForeignLine.prototype, twiceForeignLine.__proto__)
);
console.log(
  "Object.is(twiceForeignLine.prototype, Object.getPrototypeOf(twiceForeignLine)): ",
  Object.is(twiceForeignLine.prototype, Object.getPrototypeOf(twiceForeignLine))
);
console.log(
  "Object.is(twiceForeignLine.__proto__, Object.getPrototypeOf(twiceForeignLine): ",
  Object.is(twiceForeignLine.__proto__, Object.getPrototypeOf(twiceForeignLine))
);

//! 分隔一下
console.log("=============================");

console.log(
  "Object.is(same.__proto__, twiceForeignLine.prototype): ",
  Object.is(same.__proto__, twiceForeignLine.prototype)
);

console.log(
  "Object.is(twiceForeignLine.__proto__, twiceForeignLine.prototype): ",
  Object.is(twiceForeignLine.__proto__, twiceForeignLine.prototype)
);

console.log(
  "Object.is(same.__proto__, twiceForeignLine.__proto__): ",
  Object.is(same.__proto__, twiceForeignLine.__proto__),
  same.__proto__ === twiceForeignLine.__proto__
);

console.log(
  "Object.is(Object.getPrototypeOf(same), twiceForeignLine.prototype): ",
  Object.is(Object.getPrototypeOf(same), twiceForeignLine.prototype)
);

console.log(
  "Object.is(same.__proto__, Object.getPrototypeOf(twiceForeignLine)): ",
  Object.is(same.__proto__, Object.getPrototypeOf(twiceForeignLine)),
  same.__proto__ === Object.getPrototypeOf(twiceForeignLine)
);
