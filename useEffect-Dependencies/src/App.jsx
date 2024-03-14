import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(100);

  useEffect(() => {
    console.log("這是沒有 dependency 的 useEffect");
  });

  useEffect(() => {
    console.log("這是 dependency 為空陣列的useEffect");
  }, []);

  useEffect(() => {
    console.log("這是 dependency 為 [count] 的 useEffect");
  }, [count]);

  useEffect(() => {
    console.log("這是 dependency 為 [[]] 的useEffect");
  }, [[]]);

  useEffect(() => {
    console.log("這是 dependency 為 [[[]]] 的useEffect");
  }, [[[]]]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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
      <div className="card">
        <button onClick={() => setAnotherCount((count) => count + 100)}>
          count is {anotherCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
