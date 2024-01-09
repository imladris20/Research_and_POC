const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("inside promise");
      resolve();
    }, time);
  });
};

console.log("hi");

sleep(30);

setTimeout(() => {
  console.log("Mina");
}, 100);

setTimeout(() => {
  console.log("Sana");
}, 0);

console.log("hello");

setTimeout(() => {
  console.log("Momo");
}, 60);

console.log("heyyyy");
