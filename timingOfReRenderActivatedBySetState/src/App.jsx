import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["Mina", "、", "Sana", "、", "Momo"]);
  const [number, setNumber] = useState(9);

  const handleResetListButtonClick = () => {
    const newMembers = ["Mina", "、", "Sana", "、", "Momo"];
    setList(newMembers);
  };

  const handleNewListButtonClick = () => {
    const newMembers = ["Mina", "、", "Sana", "、", "Momo", "、", "Tzuyu"];
    setList(newMembers);
  };

  const handleResetNumberButtonClick = (num) => {
    setNumber(num);
  };

  console.log("有render");

  return (
    <div>
      <h1>setNumber 成一樣的數字會re-render嗎？</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginRight: "8px", color: "#ff5fa2" }}>Number:</h3>
        <h3>{number}</h3>
      </div>
      <button
        onClick={() => handleResetNumberButtonClick(9)}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
          marginRight: "12px",
        }}
      >
        setNumber to 9
      </button>
      <button
        onClick={() => handleResetNumberButtonClick(10)}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
        }}
      >
        setNumber to 10
      </button>
      <h1>setList 成一樣的array內容會re-render嗎？</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginRight: "8px", color: "#ff5fa2" }}>List:</h3>
        {list.map((member, index) => {
          return <h3 key={index}>{member}</h3>;
        })}
      </div>
      <button
        onClick={handleResetListButtonClick}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
          marginRight: "12px",
        }}
      >
        setList to the same
      </button>
      <button
        onClick={handleNewListButtonClick}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
        }}
      >
        setList to new one
      </button>
    </div>
  );
}

export default App;
