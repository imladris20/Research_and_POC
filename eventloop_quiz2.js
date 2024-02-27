const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("inside promise");
      resolve();
    }, time);
  });
};

console.log("hi");

sleep(10);

setTimeout(() => {
  console.log("Mina");
}, 100);

setTimeout(() => {
  console.log("Sana");
}, 10);

console.log("hello");

setTimeout(() => {
  console.log("Momo");
}, 60);

console.log("heyyyy");

//* 第一次作答
/*
hi
hello
heyyyy
inside promise
Sana
Momo
Mina
*/
