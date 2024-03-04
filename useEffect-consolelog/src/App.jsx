import { useEffect } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  useEffect(() => {
    console.log("A: father useEffect");
  }, []);

  console.log("B: father console.log before return");

  return (
    <>
      <h1>Here is father component</h1>
      <Child />
    </>
  );
}

export default App;
