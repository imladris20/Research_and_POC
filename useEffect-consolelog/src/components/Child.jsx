import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("C: child useEffect");
  }, []);

  console.log("D: child console.log before return");

  return (
    <div>
      <h1>Here is Child</h1>
    </div>
  );
};

export default Child;
