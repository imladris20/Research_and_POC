import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("child useEffect");
  }, []);

  console.log("child before return");

  return (
    <div>
      <h1>Here is Child</h1>
    </div>
  );
};

export default Child;
