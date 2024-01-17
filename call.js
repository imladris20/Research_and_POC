const obj = { number: 5 };

function foo(obj) {
  const newObj = obj;
  newObj.number = 10;
  return newObj;
}

console.log(obj);
console.log(foo(obj));
console.log(obj);
