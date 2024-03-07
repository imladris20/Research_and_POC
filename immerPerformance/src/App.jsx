import { produce } from "immer";
import { useState } from "react";
import "./App.css";

function App() {
  const [testObj, setTestObj] = useState([
    {
      name: "PoLien",
      age: 26,
      interest: ["baseball", "basketball", "eating"],
    },
    {
      name: "Mina",
      age: 26,
      interest: ["Lego", "Dancing", "twice", "chaeyoung"],
    },
  ]);

  const handleBtnClick = () => {
    const newTestObj = produce(testObj, (draft) => {
      draft[1].age = 27;
      draft[1].interest.push("tzuyu");
    });

    console.log("整個array 一樣嗎？", Object.is(newTestObj, testObj));
    console.log(
      "array 的第0個元素一樣嗎？",
      Object.is(newTestObj[0], testObj[0])
    );
    console.log(
      "array 的第1個元素一樣嗎？",
      Object.is(newTestObj[1], testObj[1])
    );
    console.log(
      "array 的第1個元素的name屬性一樣嗎？",
      Object.is(newTestObj[1].name, testObj[1].name)
    );
    console.log(
      "array 的第1個元素的interest屬性一樣嗎？",
      Object.is(newTestObj[1].interest, testObj[1].interest)
    );
    console.log(
      "array 的第1個元素的interest屬性的第0項元素一樣嗎？",
      Object.is(newTestObj[1].interest[0], testObj[1].interest[0])
    );

    setTestObj(newTestObj);
  };

  return (
    <div>
      <h1>Immer Performance Checking</h1>
      {testObj.map((person, index) => {
        return (
          <div key={index}>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            {person.interest.map((item, index) => {
              return <h3 key={index}>{item}</h3>;
            })}
          </div>
        );
      })}
      <button onClick={handleBtnClick}>click</button>
    </div>
  );
}

export default App;
