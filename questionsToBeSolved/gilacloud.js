const promisePool = {
  handlers: {},
  resolve: function (name) {
    this.handlers[name]();
  },
  create: function (name) {
    new Promise((resolve) => {
      this.handlers[name] = resolve;
    }).then(function haha() {
      console.log(name);
    });
  },
};

promisePool.create("a");
promisePool.create("b");

console.log(promisePool.handlers);

console.log("c");
promisePool.resolve("a");
console.log("d");
promisePool.resolve("b");
