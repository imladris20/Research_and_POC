var sleep = function (time) {
  return new Promise(function (resolve, reject) {
    console.log("promise1");
    setTimeout(() => {
      resolve();
    }, time);
    // resolve();
    console.log("promise2");
  });
};

function go() {
  console.log("start");
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  sleep(0)
    .then(() => {
      console.log("promise3");
    })
    .then(() => {
      console.log("promise4");
    });

  console.log("end");
}

go();
