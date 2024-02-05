/* function add() {
  let count = 0;
  count += 1;
  return count;
}

console.log(add());
console.log(add());
console.log(add());
count = 20;
console.log(add());
console.log(add()); */

/* let count = 0;

function add() {
  count += 1;
  return count;
}

console.log(add());
console.log(add());
console.log(add());
count = 20;
console.log(add());
console.log(add()); */

/* function getAdd() {
  let count = 0;

  const inner = () => {
    count += 1;
  };

  return inner;
}

const add = getAdd();

console.log(add());
console.log(add());
console.log(add());
count = 20;
console.log(add());
console.log(add()); */

function getAdd() {
  let count = 0;

  const inner = () => {
    count += 1;
    return count;
  };

  return inner;
}

const add = getAdd();

console.log(add());
console.log(add());
console.log(add());
count = 20;
console.log(add());
console.log(add());
