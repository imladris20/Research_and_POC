var a = 10;
function test() {
  console.log(a); //* 會出現 Cannot access 'a' before initialization 而不是 10;
  let a;
}
test();
