import { useState } from "react";
import "./App.css";
import List from "./Components/List";
import Num from "./Components/Num";

function App() {
  const [number, setNumber] = useState(9);

  const originalList = ["Mina", "、", "Sana", "、", "Momo"];
  const [list, setList] = useState(originalList);

  console.log("App 有 rerender.");

  return (
    <div>
      <h1>setNumber 成一樣的數字會re-render嗎？</h1>
      <Num number={number} />
      <button className="firstBtn" onClick={() => setNumber(9)}>
        setNumber to 9
      </button>
      <button className="btn" onClick={() => setNumber(10)}>
        setNumber to 10
      </button>
      <h1>setList 成一樣的陣列會re-render嗎？</h1>
      <List list={list} />
      <button className="firstBtn" onClick={() => setList([...originalList])}>
        setList to original one
      </button>
      <button
        className="btn"
        onClick={() => setList([...originalList, "、", "Tzuyu"])}
      >
        setList to new one
      </button>
    </div>
  );
}

export default App;
