//* 跟「arguments」很像，但不要搞混了
//! 可以看argumentsOfFunction.js 做個對照

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
