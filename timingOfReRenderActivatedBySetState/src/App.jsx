import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["Mina", "、", "Sana", "、", "Momo"]);
  const [number, setNumber] = useState(9);

  const handleResetListButtonClick = () => {
    const newMembers = [...list];
    setList(newMembers);
  };

  const handleResetNumberButtonClick = (num) => {
    setNumber(num);
  };

  console.log("有render");

  return (
    <div>
      <h1>setNumber 為一樣的數字會re-render嗎？</h1>
      <h3>Number:{number}</h3>
      <button
        onClick={() => handleResetNumberButtonClick(9)}
        style={{
          backgroundColor: "skyblue",
          color: "white",
          marginRight: "12px",
        }}
      >
        ResetNumber to 9
      </button>
      <button
        onClick={() => handleResetNumberButtonClick(10)}
        style={{
          backgroundColor: "skyblue",
          color: "white",
        }}
      >
        ResetNumber to 10
      </button>
      <h1>setList 為一樣的清單資料會re-render嗎？</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginRight: "8px", color: "skyblue" }}>List:</h3>
        {list.map((member, index) => {
          return <h3 key={index}>{member}</h3>;
        })}
      </div>
      <button onClick={handleResetListButtonClick}>ResetList</button>
    </div>
  );
}

export default App;
