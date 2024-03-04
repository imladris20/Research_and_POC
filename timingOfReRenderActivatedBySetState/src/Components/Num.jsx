const Num = ({ number }) => {
  console.log("Num 有 rerender.");

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
