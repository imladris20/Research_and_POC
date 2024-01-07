const obj1 = {
  name: "adam",
  age: 40,
  children: ["游尚霖", "林博濂"],
};

const obj2 = obj1;

obj2.age = 45;

console.log(obj1);
console.log(obj2);

const obj3 = {
  name: "JYP",
  age: 40,
  children: ["Mina", "Sana"],
};

const obj4 = { ...obj3 };
obj4.children.push("Momo");

const obj5 = { ...obj3 };
obj5.children = ["Mina", "Sana", "Momo"];

console.log(obj4 === obj3);
console.log(obj4.children == obj3.children);
console.log(obj5.children == obj3.children);
console.log(obj4.children === obj3.children);
console.log(obj5.children === obj3.children);
console.log(Object.is(obj3.children, obj4.children));
console.log(Object.is(obj3.children, obj5.children));
