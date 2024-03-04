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
      <h1>Here is Father Component.</h1>
      <Child />
      {console.log("C: father conosle.log in jsx, after component <Child>")}
    </>
  );
}

export default App;
