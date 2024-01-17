import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Child from "./components/Child";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("father useEffect");
  }, []);

  console.log("father before return");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Child />
    </>
  );
}

export default App;