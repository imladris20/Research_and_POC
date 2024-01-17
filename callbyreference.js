//  0. 執行會有錯嗎？
//  1. 如果把frontEndList 改成let宣告呢
//  2. 如果要讓三者不一樣，修改employeeList 但不改到resumeList，該怎麼做
//  3. 只用一層spreadOperator夠嗎？ (考deep clone)

const resumeList = [
  {
    name: "Lee",
    gender: "female",
  },
  {
    name: "Lin",
    gender: "male",
  },
  {
    name: "Kang",
    gender: "female",
  },
];

const employeeList = resumeList;
const frontEndList = resumeList;

employeeList[2] = { name: "Liu", gender: "male" };

frontEndList = [
  {
    name: "Lee",
    gender: "female",
  },
  {
    name: "Lin",
    gender: "male",
  },
  {
    name: "Liu",
    gender: "Male",
  },
];

console.log(resumeList);
console.log(employeeList);
console.log(frontEndList);
