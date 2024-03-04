import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["Mina", "Sana", "Momo"]);
  const [number, setNumber] = useState(9);

  const handleResetListButtonClick = () => {
    const newMembers = [...list];
    setList(newMembers);
  };

  const handleResetNumberButtonClick = (num) => {
    setNumber(num);
  };

  return (
    <div>
      <h1>setNumber到一樣的數字會re-render嗎？</h1>
      <h3>Number:{number}</h3>
      <button onClick={() => handleResetNumberButtonClick(9)}>
        ResetNumber to 9
      </button>
      <button onClick={() => handleResetNumberButtonClick(10)}>
        ResetNumber to 10
      </button>
      <h1>setList 到一樣的清單資料會re-render嗎？</h1>
      <h3>List</h3>
      {list.map((member, index) => {
        return <p key={index}>{member}</p>;
      })}
      <button onClick={handleResetListButtonClick}>ResetList</button>
    </div>
  );
}

export default App;
