import { useEffect } from "react";

const Num = ({ number }) => {
  console.log("Outside, Component 'num' just render.");

  useEffect(() => {
    console.log("Inside in useEffect, Component 'num' just render.");
  }, [[]]);

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

export default Num;
