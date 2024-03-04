import { memo, useState } from "react";
import "./App.css";

const Num = ({ number }) => {
  return (
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
  );
};

const MemoizedNumber = memo(Num);

function App() {
  const [number, setNumber] = useState(9);

  console.log("有render");

  return (
    <div>
      <h1>setNumber 成一樣的數字會re-render嗎？</h1>
      <MemoizedNumber number={number} />
      <button
        onClick={() => setNumber(9)}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
          marginRight: "12px",
        }}
      >
        setNumber to 9
      </button>
      <button
        onClick={() => setNumber(10)}
        style={{
          backgroundColor: "#FCC89B",
          color: "#334155",
        }}
      >
        setNumber to 10
      </button>
    </div>
  );
}

export default App;
