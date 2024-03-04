import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("D: child useEffect");
  }, []);

  console.log("E: child console.log before return");

  return (
    <div>
      <h2>Here is Child Component.</h2>
      {console.log("F: child conosle.log in jsx")}
    </div>
  );
};

export default Child;
