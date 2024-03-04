import { useEffect, useState } from "react";
import "./App.css";
import Num from "./Components/Num";

function App() {
  const [number, setNumber] = useState(9);
  console.log("Outside, Component 'App' just render.");

  const [message, setMessage] = useState("TWICE");

  useEffect(() => {
    console.log("Inside in useEffect, Component 'App' just render.");
  });

  return (
    <div>
      <h1>If we setNumber to same value, will react do re-render？</h1>
      <Num number={number} />
      <button className="firstBtn" onClick={() => setNumber(9)}>
        setNumber to 9
      </button>
      <button
        className="btn"
        onClick={() => {
          setNumber(10);
          setNumber(11);
          setNumber(10);
          console.log(number);
        }}
      >
        setNumber to 10
      </button>
      <h1>{message}</h1>
      <button className="btn" onClick={() => setMessage("ITZY")}>
        setMessage
      </button>
      {console.log("haha")}
    </div>
  );
}

export default App;
