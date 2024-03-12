function Once() {
  const twiceDebut = 20151020;
}

const newOnce = new Once();

console.log("typeof Once: ", typeof Once, Once);
console.log("typeof newOnce: ", typeof newOnce, newOnce);

//! 分隔一下
console.log("==============================");

console.log("newOnce.__proto__: ", newOnce.__proto__);
console.log("newOnce.__proto__.__proto__: ", newOnce.__proto__.__proto__);
console.log(
  "newOnce.__proto__.__proto__.__proto__: ",
  newOnce.__proto__.__proto__.__proto__
);
console.log("newOnce.prototype: ", newOnce.prototype);
console.log("Object.getPrototypeOf(newOnce): ", Object.getPrototypeOf(newOnce));

console.log(
  "Object.is(newOnce.prototype, newOnce.__proto__): ",
  Object.is(newOnce.prototype, newOnce.__proto__)
);
console.log(
  "Object.is(newOnce.prototype, Object.getPrototypeOf(newOnce)): ",
  Object.is(newOnce.prototype, Object.getPrototypeOf(newOnce))
);
console.log(
  "Object.is(newOnce.__proto__, Object.getPrototypeOf(newOnce): ",
  Object.is(newOnce.__proto__, Object.getPrototypeOf(newOnce))
);

//! 分隔一下
console.log("=============================");

console.log("Once.__proto__: ", Once.__proto__);
console.log("Once.__proto__.__proto__: ", Once.__proto__.__proto__);
console.log(
  "Once.__proto__.__proto__.__proto__: ",
  Once.__proto__.__proto__.__proto__
);
console.log("Once.prototype: ", Once.prototype);
console.log("Object.getPrototypeOf(Once): ", Object.getPrototypeOf(Once));

console.log(
  "Object.is(Once.prototype, Once.__proto__): ",
  Object.is(Once.prototype, Once.__proto__)
);
console.log(
  "Object.is(Once.prototype, Object.getPrototypeOf(Once)): ",
  Object.is(Once.prototype, Object.getPrototypeOf(Once))
);
console.log(
  "Object.is(Once.__proto__, Object.getPrototypeOf(Once): ",
  Object.is(Once.__proto__, Object.getPrototypeOf(Once))
);

//! 分隔一下
console.log("=============================");

console.log(
  "Object.is(newOnce.__proto__, Once.prototype): ",
  Object.is(newOnce.__proto__, Once.prototype)
);

console.log(
  "Object.is(newOnce.__proto__, Once.__proto__): ",
  Object.is(newOnce.__proto__, Once.__proto__),
  newOnce.__proto__ === Once.__proto__
);

console.log(
  "Object.is(Object.getPrototypeOf(newOnce), Once.prototype): ",
  Object.is(Object.getPrototypeOf(newOnce), Once.prototype)
);

console.log(
  "Object.is(Object.getPrototypeOf(newOnce), Object.getPrototypeOf(Once)): ",
  Object.is(Object.getPrototypeOf(newOnce), Object.getPrototypeOf(Once))
);

console.log(
  "Object.is(newOnce.__proto__, Object.getPrototypeOf(Once)): ",
  Object.is(newOnce.__proto__, Object.getPrototypeOf(Once)),
  newOnce.__proto__ === Object.getPrototypeOf(Once)
);
