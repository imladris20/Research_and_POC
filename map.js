const map = new Map([
  [1, "haha"],
  [2, "yoyo"],
  [3, "appapp"],
]);

console.log(map);

for (const entry of map) {
  const [key, value] = entry;
  console.log("for of entry: ", entry);
  console.log("for of key: ", key);
  console.log("for of value: ", value);
}

console.log("map.keys(): ", map.keys());
console.log("map.values(): ", map.values());
console.log("map.entries(): ", map.entries());

//! Map 物件使用 for...in... 雖然不會報錯，但因為他也不是 object，所以會不如預期的運行
for (const value in map) {
  console.log("for in", value);
}
